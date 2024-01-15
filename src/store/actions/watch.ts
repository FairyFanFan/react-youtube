import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const WATCH_DETAILS = createRequestTypes('WATCH_DETAILS');
export const details = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: (videoId: any, channelId: any) => createAction(WATCH_DETAILS[REQUEST], {videoId, channelId}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any, videoId: any) => createAction(WATCH_DETAILS[SUCCESS], {response, videoId}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(WATCH_DETAILS[FAILURE], {response}),
};

export const VIDEO_DETAILS = createRequestTypes('VIDEO_DETAILS');
export const videoDetails = {
  request: () => {
    throw Error('not implemented');
  },
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any) => createAction(VIDEO_DETAILS[SUCCESS], {response}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(VIDEO_DETAILS[FAILURE], {response}),
};