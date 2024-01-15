import {createAction, createRequestTypes, REQUEST, SUCCESS, FAILURE} from './index';

export const VIDEO_CATEGORIES = createRequestTypes('VIDEO_CATEGORIES');
export const categories = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: () => createAction(VIDEO_CATEGORIES[REQUEST]),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any) => createAction(VIDEO_CATEGORIES[SUCCESS], {response}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(VIDEO_CATEGORIES[FAILURE], {response}),
};

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR');
export const mostPopular = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: (amount: any, loadDescription: any, nextPageToken: any) => createAction(MOST_POPULAR[REQUEST], {amount, loadDescription, nextPageToken}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any) => createAction(MOST_POPULAR[SUCCESS], {response}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(MOST_POPULAR[FAILURE], {response}),
};

export const MOST_POPULAR_BY_CATEGORY = createRequestTypes('MOST_POPULAR_BY_CATEGORY');
export const mostPopularByCategory = {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  request: (categories: any) => createAction(MOST_POPULAR_BY_CATEGORY[REQUEST], {categories}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  success: (response: any, categories: any) => createAction(MOST_POPULAR_BY_CATEGORY[SUCCESS], {response, categories}),
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  failure: (response: any) => createAction(MOST_POPULAR_BY_CATEGORY[FAILURE], response),
};
