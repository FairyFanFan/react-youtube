import {fork, take, all, put, call} from 'redux-saga/effects';
import * as watchActions from '../actions/watch';
import {
  buildVideoDetailRequest,
  buildRelatedVideosRequest,
  buildChannelRequest,
  buildCommentThreadRequest
} from '../api/youtube-api';
import {REQUEST} from '../actions';
import {SEARCH_LIST_RESPONSE, VIDEO_LIST_RESPONSE} from '../api/youtube-api-response-types';

export function* fetchWatchDetails(videoId: any, channelId: any) {
  let requests = [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId),
    buildCommentThreadRequest.bind(null, videoId)
  ];

  if (channelId) {
    requests.push(buildChannelRequest.bind(null, channelId));
  }

  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses, videoId));
    yield call (fetchVideoDetails, responses, channelId === null);
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
}

function* fetchVideoDetails(responses: any, shouldFetchChannelInfo: any) {
  const searchListResponse = responses.find((response: any) => response.result.kind === SEARCH_LIST_RESPONSE);
  const relatedVideoIds =  searchListResponse.result.items.map((relatedVideo: any) => relatedVideo.id.videoId);

  const requests = relatedVideoIds.map((relatedVideoId: any) => {
    return buildVideoDetailRequest.bind(null, relatedVideoId);
  });

  if (shouldFetchChannelInfo) {
    // we have to extract the video's channel id from the video details response
    // so we can load additional channel information.
    // this is only needed, when a user directly accesses .../watch?v=1234
    // because then we only know the video id
    const videoDetailResponse = responses.find((response: any) => response.result.kind === VIDEO_LIST_RESPONSE);
    const videos = videoDetailResponse.result.items;
    if (videos && videos.length) {
      requests.push(buildChannelRequest.bind(null, videos[0].snippet.channelId));
    }
  }

  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const responses = yield all(requests.map((fn: any) => call(fn)));
    yield put(watchActions.videoDetails.success(responses));
  } catch (error) {
    yield put(watchActions.videoDetails.failure(error));
  }
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchWatchDetails() {
  while (true) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const {videoId, channelId} = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    yield fork(fetchWatchDetails, videoId, channelId);
  }
}