import {all, call, put, fork} from 'redux-saga/effects';
import {watchMostPopularVideos, watchMostPopularVideosByCategory, watchVideoCategories} from './video';
import {watchWatchDetails} from './watch';
import {watchCommentThread} from './comment';
import {watchSearchForVideos} from './search';
export default function* () {
  yield all([
    fork(watchMostPopularVideos),
    fork(watchVideoCategories),
    fork(watchMostPopularVideosByCategory),
    fork(watchWatchDetails),
    fork(watchCommentThread),
    fork(watchSearchForVideos)
  ]);
}

/*
* entity must have a success, request and failure method
* request is a function that returns a promise when called
* */
export function* fetchEntity(request: any, entity: any, ...args: any[]) {
  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const response = yield call(request);
    // we directly return the result object and throw away the headers and the status text here
    // if status and headers are needed, then instead of returning response.result, we have to return just response.
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}

export function ignoreErrors(fn: any, ...args: any[]) {
  return () => {
    const ignoreErrorCallback = (response: any) => response;
    return fn(...args).then(ignoreErrorCallback, ignoreErrorCallback);
  };
}