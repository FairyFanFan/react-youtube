import React from 'react';
// @ts-expect-error TS(6142): Module '../App' was resolved to '/Users/joy/fxq/st... Remove this comment to see the full error message
import App from '../App';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import {shallow} from 'enzyme';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('App', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders', () => {
    const wrapper = shallow(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <App/>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
