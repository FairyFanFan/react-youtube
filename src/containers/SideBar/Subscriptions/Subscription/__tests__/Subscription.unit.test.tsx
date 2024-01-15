import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import {shallow} from 'enzyme';
// @ts-expect-error TS(6142): Module '../Subscription' was resolved to '/Users/j... Remove this comment to see the full error message
import {Subscription} from '../Subscription';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Subscription', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders empty subscription', () => {
    const wrapper = shallow(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Subscription/>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders broadcasting subscription', () => {
    const wrapper = shallow(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Subscription broadcasting label='Productioncoder'/>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders non-broadcasting subscription with new videos', () => {
    const wrapper = shallow(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Subscription amountNewVideos={4} label='Productioncoder'/>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});

