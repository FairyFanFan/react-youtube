import apiReducer from '../api';
import {YOUTUBE_LIBRARY_LOADED} from '../../actions/api';

const initialState = {
  libraryLoaded: false,
};

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('api reducer', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('test unused action type with default initial state', () => {
    const unusedActionType = 'unused-action-type';
    const expectedEndState = {...initialState};
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(apiReducer(undefined, {type: unusedActionType})).toEqual(expectedEndState);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('test api reducer with YOUTUBE_LIBRARY_LOADED action', () => {
    const startState = {...initialState};
    const expectedEndState = {
      libraryLoaded: true,
    };
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(apiReducer(startState, {type: YOUTUBE_LIBRARY_LOADED})).toEqual(expectedEndState);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('test api reducer for idempotence with YOUTUBE_LIBRARY_LOADED action and library already loaded', () => {
    const startState = {
      libraryLoaded: true,
    };
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(apiReducer(startState, {type: YOUTUBE_LIBRARY_LOADED})).toEqual(startState);
  });
});
