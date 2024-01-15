import {getVideoDurationString} from '../date-format';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('services/date-format getVideoDurationString()', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 4s video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT4S')).toEqual('0:04');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 13s video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT13S')).toEqual('0:13');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 1min video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT1M')).toEqual('1:00');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 01:31 min video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT1M31S')).toEqual('1:31');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 10:10 min video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT10M10S')).toEqual('10:10');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 3:06:15 hours video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT3H6M15S')).toEqual('3:06:15');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 13:30:47 hours video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('PT13H30M47S')).toEqual('13:30:47');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('getVideoDurationString() formats 01:00:25:05 days video', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getVideoDurationString('P1DT25M5S')).toEqual('24:25:05');
  });
});
