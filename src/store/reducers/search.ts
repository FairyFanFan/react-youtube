import {SEARCH_FOR_VIDEOS} from '../actions/search';
import {REQUEST, SUCCESS} from '../actions';

export default function (state = {}, action: any) {
  switch (action.type) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case SEARCH_FOR_VIDEOS[SUCCESS]:
      return reduceSearchForVideos(action.response, action.searchQuery, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case SEARCH_FOR_VIDEOS[REQUEST]:
      // delete the previous search because otherwise our component flickers and shows the
      // previous search results before it shows
      return action.nextPageToken ? state : {};
    default:
      return state;
  }
}

function reduceSearchForVideos(response: any, searchQuery: any, prevState: any) {
  let searchResults = response.items.map((item: any) => ({
    ...item,
    id: item.id.videoId
  }));
  if (prevState.query === searchQuery) {
    const prevResults = prevState.results || [];
    searchResults = prevResults.concat(searchResults);
  }
  return {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    query: searchQuery,
    results: searchResults
  };
}

/*
  Selectors
 */
export const getSearchResults = (state: any) => state.search.results;
export const getSearchNextPageToken = (state: any) => state.search.nextPageToken;
