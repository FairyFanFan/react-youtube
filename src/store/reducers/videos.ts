import {MOST_POPULAR, MOST_POPULAR_BY_CATEGORY, VIDEO_CATEGORIES} from '../actions/video';
import {SUCCESS} from '../actions';
import {createSelector} from 'reselect';
import {SEARCH_LIST_RESPONSE, VIDEO_LIST_RESPONSE} from '../api/youtube-api-response-types';
import {VIDEO_DETAILS, WATCH_DETAILS} from '../actions/watch';
import {getSearchParam} from '../../services/url';

export const initialState = {
  byId: {},
  mostPopular: {},
  categories: {},
  byCategory: {},
  related: {},
};
export default function videos(state = initialState, action: any) {
  switch (action.type) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case VIDEO_CATEGORIES[SUCCESS]:
      return reduceFetchVideoCategories(action.response, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case MOST_POPULAR_BY_CATEGORY[SUCCESS]:
      return reduceFetchMostPopularVideosByCategory(action.response, action.categories, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case VIDEO_DETAILS[SUCCESS]:
      return reduceVideoDetails(action.response, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideos(response: any, prevState: any) {
  const videoMap = response.items.reduce((accumulator: any, video: any) => {
    accumulator[video.id] = video;
    return accumulator;
  }, {});

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items,
  };

  return {
    ...prevState,
    mostPopular,
    byId: {...prevState.byId, ...videoMap},
  };
}

function reduceFetchVideoCategories(response: any, prevState: any) {
  const categoryMapping = response.items.reduce((accumulator: any, category: any) => {
    accumulator[category.id] = category.snippet.title;
    return accumulator;
  }, {});
  return {
    ...prevState,
    categories: categoryMapping,
  };
}

function reduceFetchMostPopularVideosByCategory(responses: any, categories: any, prevState: any) {
  let videoMap = {};
  let byCategoryMap = {};

  responses.forEach((response: any, index: any) => {
    // ignore answer if there was an error
    if (response.status === 400) return;

    const categoryId = categories[index];
    const {byId, byCategory} = groupVideosByIdAndCategory(response.result);
    videoMap = {...videoMap, ...byId};
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    byCategoryMap[categoryId] = byCategory;
  });

  // compute new state
  return {
    ...prevState,
    byId: {...prevState.byId, ...videoMap},
    byCategory: {...prevState.byCategory, ...byCategoryMap},
  };
}

function groupVideosByIdAndCategory(response: any) {
  const videos = response.items;
  const byId = {};
  const byCategory = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items: [],
  };

  videos.forEach((video: any) => {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    byId[video.id] = video;

    const items = byCategory.items;
    if(items && items) {
      // @ts-expect-error TS(2345): Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message
      items.push(video.id);
    } else {
      // @ts-expect-error TS(2322): Type 'any' is not assignable to type 'never'.
      byCategory.items = [video.id];
    }
  });

  return {byId, byCategory};
}

function reduceWatchDetails(responses: any, prevState: any) {
  const videoDetailResponse = responses.find((r: any) => r.result.kind === VIDEO_LIST_RESPONSE);
  // we know that items will only have one element
  // because we explicitly asked for a video with a specific id
  const video = videoDetailResponse.result.items[0];
  const relatedEntry = reduceRelatedVideosRequest(responses);

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      [video.id]: video
    },
    related: {
      ...prevState.related,
      [video.id]: relatedEntry
    }
  };
}

function reduceRelatedVideosRequest(responses: any) {
  const relatedVideosResponse = responses.find((r: any) => r.result.kind === SEARCH_LIST_RESPONSE);
  const {pageInfo, items, nextPageToken} = relatedVideosResponse.result;
  const relatedVideoIds = items.map((video: any) => video.id.videoId);

  return {
    totalResults: pageInfo.totalResults,
    nextPageToken,
    items: relatedVideoIds
  };
}

function reduceVideoDetails(responses: any, prevState: any) {
  const videoResponses = responses.filter((response: any) => response.result.kind === VIDEO_LIST_RESPONSE);
  const parsedVideos = videoResponses.reduce((videoMap: any, response: any) => {
    // we're explicitly asking for a video with a particular id
    // so the response set must either contain 0 items (if a video with the id does not exist)
    // or at most one item (i.e. the channel we've been asking for)
    const video = response.result.items ? response.result.items[0] : null;
    if (!video) {
      return videoMap;
    }
    videoMap[video.id] = video;
    return videoMap;
  }, {});

  return {
    ...prevState,
    byId: {...prevState.byId, ...parsedVideos},
  };
}

/* function reduceVideoDetails(responses) {
  const videoResponses = responses.filter(response => response.result.kind === VIDEO_LIST_RESPONSE);
  return videoResponses.reduce((accumulator, response) => {
    response.result.items.forEach(video => {
      accumulator[video.id] = video;
    });
    return accumulator;
  }, {});
}

function reduceRelatedVideos(responses, videoIds) {
  const videoResponses = responses.filter(response => response.result.kind === SEARCH_LIST_RESPONSE);
  return videoResponses.reduce((accumulator, response, index) => {
    const relatedIds = response.result.items.map(video => video.id.videoId);
    accumulator[videoIds[index]] = {
      totalResults: response.result.pageInfo.totalResults,
      nextPageToken: response.result.nextPageToken,
      items: relatedIds
    };
    return accumulator;
  }, {});
} */


/*
*   Selectors
* */
const getMostPopular = (state: any) => state.videos.mostPopular;
export const getMostPopularVideos = createSelector(
  (state) => state.videos.byId,
  getMostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }
    return mostPopular.items.map((videoId: any) => videosById[videoId]);
  }
);
export const getVideoCategoryIds = createSelector(
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.categories,
  (categories) => {
    return Object.keys(categories || {});
  }
);

export const getVideosByCategory = createSelector(
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.byCategory,
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.byId,
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.categories,
  (videosByCategory, videosById, categories) => {
    return Object.keys(videosByCategory || {}).reduce((accumulator, categoryId) => {
      const videoIds = videosByCategory[categoryId].items;
      const categoryTitle = categories[categoryId];
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      accumulator[categoryTitle] = videoIds.map((videoId: any) => videosById[videoId]);
      return accumulator;
    }, {});
  }
);

export const videoCategoriesLoaded = createSelector(
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.categories,
  (categories) => {
    return Object.keys(categories || {}).length !== 0;
  }
);

export const videosByCategoryLoaded = createSelector(
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  state => state.videos.byCategory,
  (videosByCategory) => {
    return Object.keys(videosByCategory || {}).length;
  }
);

export const getVideoById = (state: any, videoId: any) => {
  return state.videos.byId[videoId];
};
const getRelatedVideoIds = (state: any, videoId: any) => {
  const related = state.videos.related[videoId];
  return related ? related.items : [];
};
export const getRelatedVideos = createSelector(
  getRelatedVideoIds,
  state => state.videos.byId,
  (relatedVideoIds, videos) => {
    if (relatedVideoIds) {
      // filter kicks out null values we might have
      return relatedVideoIds.map((videoId: any) => videos[videoId]).filter((video: any) => video);
    }
    return [];
  });

export const getChannelId = (state: any, location: any, name: any) => {
  const videoId = getSearchParam(location, name);
  // @ts-expect-error TS(2538): Type 'null' cannot be used as an index type.
  const video = state.videos.byId[videoId];
  if (video) {
    return video.snippet.channelId;
  }
  return null;
};

export const getAmountComments = createSelector(
  getVideoById,
  (video) => {
    if (video) {
      return video.statistics.commentCount;
    }
    return 0;
  });

export const allMostPopularVideosLoaded = createSelector(
  [getMostPopular],
  (mostPopular) => {
    const amountFetchedItems = mostPopular.items ? mostPopular.items.length : 0;
    return amountFetchedItems === mostPopular.totalResults;
  }
);

export const getMostPopularVideosNextPageToken = createSelector(
  [getMostPopular],
  (mostPopular) => {
    return mostPopular.nextPageToken;
  }
);

