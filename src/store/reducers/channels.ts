import {VIDEO_DETAILS, WATCH_DETAILS} from '../actions/watch';
import {SUCCESS} from '../actions';
import {CHANNEL_LIST_RESPONSE} from '../api/youtube-api-response-types';

const initialState = {
  byId: {}
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, state);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    case VIDEO_DETAILS[SUCCESS]:
      return reduceVideoDetails(action.response, state);
    default:
      return state;
  }
}

function reduceWatchDetails(responses: any, prevState: any) {
  const channelResponse = responses.find((response: any) => response.result.kind === CHANNEL_LIST_RESPONSE);
  let channels = {};
  if (channelResponse && channelResponse.result.items) {
    // we know that there will only be one item
    // because we ask for a channel with a specific id
    const channel = channelResponse.result.items[0];
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    channels[channel.id] = channel;
  }
  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...channels
    }
  };
}

function reduceVideoDetails(responses: any, prevState: any) {
  const channelResponse = responses.find((response: any) => response.result.kind === CHANNEL_LIST_RESPONSE);
  let channelEntry = {};
  if (channelResponse && channelResponse.result.items) {
    // we're explicitly asking for a channel with a particular id
    // so the response set must either contain 0 items (if a channel with the specified id does not exist)
    // or at most one item (i.e. the channel we've been asking for)
    const channel = channelResponse.result.items[0];
    channelEntry =  {
      [channel.id]: channel,
    }
  }

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...channelEntry,
    }
  };
}

/*
*   Selectors
* */
export const getChannel = (state: any, channelId: any) => {
  if (!channelId) return null;
  return state.channels.byId[channelId];
};