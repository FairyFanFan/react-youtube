import {YOUTUBE_LIBRARY_LOADED} from '../actions/api';

const initialState = {
  libraryLoaded: false,
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true,
      };
    default:
      return state;
  }
}
export const getYoutubeLibraryLoaded = (state: any) => state.api.libraryLoaded;