import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const COMMENT_THREAD = createRequestTypes('COMMENT_THREAD');
export const thread = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: (videoId: any, nextPageToken: any) => createAction(COMMENT_THREAD[REQUEST], {videoId, nextPageToken}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any, videoId: any) => createAction(COMMENT_THREAD[SUCCESS], {response, videoId}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(COMMENT_THREAD[FAILURE], {response}),
};