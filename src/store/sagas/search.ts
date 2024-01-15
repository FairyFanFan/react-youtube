import * as searchActions from '../actions/search';
import {REQUEST} from '../actions';
import {fork, take} from 'redux-saga/effects';
import * as api from '../api/youtube-api';
import {fetchEntity} from './index';

export function* searchForVideos(searchQuery: any, nextPageToken: any, amount: any) {
  const request = api.buildSearchRequest.bind(null, searchQuery, nextPageToken, amount);
  yield fetchEntity(request, searchActions.forVideos, searchQuery);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchSearchForVideos() {
  while (true) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const {searchQuery, amount, nextPageToken} = yield take(searchActions.SEARCH_FOR_VIDEOS[REQUEST]);
    yield fork(searchForVideos, searchQuery, nextPageToken, amount);
  }
}