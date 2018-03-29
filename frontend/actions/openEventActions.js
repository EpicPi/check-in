import * as qs from 'qs';
import {
  OPEN_GET_EVENT,
  OPEN_GET_RSVP,
  OPEN_GOT_EVENT,
  OPEN_GOT_RSVP,
  OPEN_JOIN_EVENT,
  OPEN_UPDATE_RSVP,
  UPDATE_RSVPS,
  UPDATED_RSVPS
} from './types';
import axios from 'axios/index';

export const openGetEvent = code => async dispatch => {
  dispatch({ type: OPEN_GET_EVENT });
  const res = await axios.get('/api/open/get_event', {
    params: { code: code }
  });
  dispatch({ type: OPEN_GOT_EVENT, payload: res.data });
  dispatch(getOpenRsvp(res.data));
};

export const openCheckin = (event, id) => async dispatch => {
  const res = await axios.post(
    '/api/open/check_in',
    qs.stringify({ event: event._id, id: id })
  );
  // dispatch({ type: OPEN_JOIN_EVENT, payload:  });
};

export const openWalkin = (event, name) => async dispatch => {
  const res = await axios.post(
    '/api/open/walk_in',
    qs.stringify({ event: event._id, name: name })
  );
};

export const getOpenRsvp = event => async disptch => {
  console.log('getting');
  if (!event._id) disptch({ type: OPEN_GOT_RSVP, payload: [] });
  else {
    disptch({ type: OPEN_GET_RSVP });
    const res = await axios.post(
      '/api/open/rsvp',
      qs.stringify({ id: event._id })
    );
    disptch({ type: OPEN_GOT_RSVP, payload: res.data });
  }
};

export const updateOpenRsvp = update => async dispatch => {
  dispatch({ type: OPEN_UPDATE_RSVP, payload: update });
};
