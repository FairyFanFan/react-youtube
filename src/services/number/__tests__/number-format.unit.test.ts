import {getShortNumberString} from '../number-format';

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(0)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(0)).toEqual('0');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(9)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(9)).toEqual('9');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(52)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(52)).toEqual('52');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(456)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(456)).toEqual('456');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1001)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1001)).toEqual('1.0K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1099)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1099)).toEqual('1.1K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(5298)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(5298)).toEqual('5.3K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(10053)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(10053)).toEqual('10.1K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(10100)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(10100)).toEqual('10.1K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(10999)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(10999)).toEqual('11.0K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(11732)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(11732)).toEqual('12K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(100000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(100000)).toEqual('100K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(532000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(532000)).toEqual('532K');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1000000)).toEqual('1M');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1230000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1230000)).toEqual('1.2M');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(23000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(23000000)).toEqual('23M');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(872000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(872000000)).toEqual('872M');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1000000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1000000000)).toEqual('1B');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1500000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1500000000)).toEqual('1.5B');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(20000000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(20000000000)).toEqual('20B');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(387000000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(387000000000)).toEqual('387B');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1000000000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1000000000000)).toEqual('1T');
});

// @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('getShortNumberString(1800000000000)', () => {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(getShortNumberString(1800000000000)).toEqual('1.8T');
});