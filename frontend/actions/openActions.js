import * as qs from 'qs';
import {
  OPEN_GET_EVENT,
  OPEN_GET_RSVP,
  OPEN_GOT_EVENT,
  OPEN_GOT_RSVP,
  OPEN_UPDATE_RSVP
} from './types';
import axios from 'axios/index';
import { openRoot } from './index';

export const openGetEvent = code => async dispatch => {
  dispatch({ type: OPEN_GET_EVENT });
  const res = await axios.get(openRoot + 'get_event', {
    params: { code: code }
  });
  dispatch({ type: OPEN_GOT_EVENT, payload: res.data });
  dispatch(getOpenRsvp(res.data));
};

export const openCheckin = (event, guest) => async dispatch => {
  const res = await axios.post(
    openRoot + 'check_in',
    qs.stringify({ event: event._id, guest: guest })
  );
};

export const openWalkin = (event, name) => async dispatch => {
  const res = await axios.post(
    openRoot + 'walk_in',
    qs.stringify({ event: event._id, name: name })
  );
};
//only returns the not signed in ones
export const getOpenRsvp = event => async disptch => {
  if (!event._id) disptch({ type: OPEN_GOT_RSVP, payload: [] });
  else {
    disptch({ type: OPEN_GET_RSVP });
    const res = await axios.post(
      openRoot + 'rsvp',
      qs.stringify({ id: event._id })
    );
    disptch({ type: OPEN_GOT_RSVP, payload: res.data });
  }
};
export const getOpenRsvpFull = event => async disptch => {
  if (!event._id) disptch({ type: OPEN_GOT_RSVP, payload: [] });
  else {
    disptch({ type: OPEN_GET_RSVP });
    const res = await axios.post(
      openRoot + 'rsvp_full',
      qs.stringify({ id: event._id })
    );
    disptch({ type: OPEN_GOT_RSVP, payload: res.data });
  }
};

export const updateOpenRsvp = update => async dispatch => {
  dispatch({ type: OPEN_UPDATE_RSVP, payload: update });
};
