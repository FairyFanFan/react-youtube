import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import {shallow} from 'enzyme';
// @ts-expect-error TS(6142): Module '../Watch' was resolved to '/Users/joy/fxq/... Remove this comment to see the full error message
import {Watch} from '../Watch';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Watch', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Watch/>);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});