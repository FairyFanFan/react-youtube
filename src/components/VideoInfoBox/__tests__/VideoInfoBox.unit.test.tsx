// @ts-expect-error TS(6142): Module '../VideoInfoBox' was resolved to '/Users/j... Remove this comment to see the full error message
import {VideoInfoBox} from '../VideoInfoBox';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import {shallow} from 'enzyme';
import React from 'react';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('VideoInfoBox', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders collapsed', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<VideoInfoBox/>);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders expanded', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<VideoInfoBox/>);
    wrapper.setState({collapsed: false});
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});