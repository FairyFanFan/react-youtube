import {parseISO8601TimePattern} from '../date-format';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('date-format ISO8601', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 4 seconds ISO8601 video duration string ', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT4S')).toEqual({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 4});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 13 seconds ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT13S')).toEqual({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 13});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 01:00 min ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT1M')).toEqual({years: 0, months: 0, days: 0, hours: 0, minutes: 1, seconds: 0});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 1:31 min ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT1M31S')).toEqual({years: 0, months: 0, days: 0, hours: 0, minutes: 1, seconds: 31});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 10:10 min ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT10M10S')).toEqual({years: 0, months: 0, days: 0, hours: 0, minutes: 10, seconds: 10});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 03:06:15 hours ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT3H6M15S')).toEqual({years: 0, months: 0, days: 0, hours: 3, minutes: 6, seconds: 15});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 13:30:47 hours ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('PT13H30M47S')).toEqual({years: 0, months: 0, days: 0, hours: 13, minutes: 30, seconds: 47});
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('parse 13:30:47 hours ISO8601 video duration string', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(parseISO8601TimePattern('P1DT25M5S')).toEqual({years: 0, months: 0, days: 1, hours: 0, minutes: 25, seconds: 5});
  });
});