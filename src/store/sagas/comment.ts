import {fork, take} from 'redux-saga/effects';
import {REQUEST} from '../actions';
import * as commentActions from '../actions/comment'
import * as api from '../api/youtube-api';
import {fetchEntity} from './index';

export function* fetchCommentThread(videoId: any, nextPageToken: any) {
  const request = api.buildCommentThreadRequest.bind(null, videoId, nextPageToken);
  yield fetchEntity(request, commentActions.thread, videoId);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchCommentThread() {
  while(true) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const {videoId, nextPageToken} = yield take(commentActions.COMMENT_THREAD[REQUEST]);
    yield fork(fetchCommentThread, videoId, nextPageToken);
  }
}