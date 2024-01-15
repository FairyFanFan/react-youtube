export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export function createRequestTypes(base: any) {
  if (!base) {
    throw new Error('cannot create request type with base = \'\' or base = null');
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export function createAction(type: any, payload = {}) {
  return {
    type,
    ...payload,
  };
}