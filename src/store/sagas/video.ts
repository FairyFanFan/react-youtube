import {fork, take, takeEvery, call, all, put} from 'redux-saga/effects';
import * as api from '../api/youtube-api';
import * as videoActions from '../actions/video';
import {REQUEST} from '../actions';
import {fetchEntity, ignoreErrors} from './index';

export const fetchVideoCategories = fetchEntity.bind(null, api.buildVideoCategoriesRequest, videoActions.categories);


export function* fetchMostPopularVideosByCategory(categories: any) {
  const requests = categories.map((categoryId: any) => {
    const wrapper = ignoreErrors(api.buildMostPopularVideosRequest, 12, false, null, categoryId);
    return call(wrapper);
  });
  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const response = yield all(requests);
    yield put(videoActions.mostPopularByCategory.success(response, categories));
  } catch (error) {
    yield put(videoActions.mostPopularByCategory.failure(error));
  }
}

export function* fetchMostPopularVideos(amount: any, loadDescription: any, nextPageToken: any) {
  const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
  yield fetchEntity(request, videoActions.mostPopular);
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchMostPopularVideos() {
  while (true) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}

export function* watchVideoCategories() {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  yield takeEvery(videoActions.VIDEO_CATEGORIES[REQUEST], fetchVideoCategories);
}
export function* watchMostPopularVideosByCategory() {
  while(true) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const {categories} = yield take(videoActions.MOST_POPULAR_BY_CATEGORY[REQUEST]);
    yield fork(fetchMostPopularVideosByCategory, categories);
  }
}