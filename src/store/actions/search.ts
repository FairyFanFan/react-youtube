import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const SEARCH_FOR_VIDEOS = createRequestTypes('SEARCH_FOR_VIDEOS');
export const forVideos = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: (searchQuery: any, nextPageToken: any, amount: any) => createAction(SEARCH_FOR_VIDEOS[REQUEST], {searchQuery, nextPageToken, amount}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any, searchQuery: any) => createAction(SEARCH_FOR_VIDEOS[SUCCESS], {response, searchQuery}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any, searchQuery: any) => createAction(SEARCH_FOR_VIDEOS[FAILURE],  {response, searchQuery}),
};