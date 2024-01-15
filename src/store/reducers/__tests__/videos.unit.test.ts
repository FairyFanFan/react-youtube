import videosReducer, {initialState} from '../videos';
import {MOST_POPULAR } from '../../actions/video';
import {SUCCESS} from '../../actions';
// @ts-expect-error TS(2307): Cannot find module './responses/MOST_POPULAR_SUCCE... Remove this comment to see the full error message
import mostPopularResponse from './responses/MOST_POPULAR_SUCCESS';
// @ts-expect-error TS(2307): Cannot find module './states/MOST_POPULAR_SUCCESS'... Remove this comment to see the full error message
import mostPopularSuccessState from './states/MOST_POPULAR_SUCCESS';


// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('videos reducer', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('test undefined action type and initial state with videos reducer', () => {
    const expectedEndState = {...initialState};
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(videosReducer(undefined, {type: 'some-unused-type'})).toEqual(expectedEndState);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('test MOST_POPULAR_SUCCESS action in video reducer', () => {
    const startState = {...initialState};
    const action = {
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      type: MOST_POPULAR[SUCCESS],
      response: mostPopularResponse,
    };
    const expectedEndState = {
      ...startState,
      ...mostPopularSuccessState
    };
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(videosReducer(startState, action)).toEqual(expectedEndState);
  });
});

