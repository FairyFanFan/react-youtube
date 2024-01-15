import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import {shallow} from 'enzyme';
// @ts-expect-error TS(6142): Module '../InfiniteScroll' was resolved to '/Users... Remove this comment to see the full error message
import {InfiniteScroll} from '../InfiniteScroll';

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('renders empty <InfiniteScroll/>', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<InfiniteScroll/>);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper).toMatchSnapshot();
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('renders <InfiniteScroll/> with tall child', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<InfiniteScroll>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div />
  </InfiniteScroll>);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper).toMatchSnapshot();
});