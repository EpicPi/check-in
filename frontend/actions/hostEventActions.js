import {
  HOST_ADD_EVENT,
  HOST_CHECK_SIGNUP_CODE,
  HOST_CHECKED_SIGNUP_CODE,
  HOST_CHECKIN,
  HOST_EDIT_EVENT,
  HOST_GET_EVENTS,
  HOST_GOT_EVENTS,
  HOST_REMOVE_EVENT,
  HOST_REPLACE,
  HOST_RESET_SIGNUP_EVENT
} from './types';
import axios from 'axios/index';
import * as qs from 'qs';
import { hostRoot } from './index';

export const createEvent = event => async dispatch => {
  dispatch({ type: HOST_ADD_EVENT, payload: event });
  const event2 = await axios.post(hostRoot + 'add_event', qs.stringify(event));
  dispatch(replaceEvent(event2.data, event));
};

export const hostGetEvents = () => async dispatch => {
  dispatch({ type: HOST_GET_EVENTS });
  const res = await axios.get(hostRoot + 'get_events');
  dispatch({ type: HOST_GOT_EVENTS, payload: res.data });
};

export const hostRemoveEvent = event => dispatch => {
  dispatch({ type: HOST_REMOVE_EVENT, payload: event });
  axios.post(hostRoot + 'remove_event', qs.stringify(event));
};

export const replaceEvent = (event, toReplace) => dispatch => {
  dispatch({
    type: HOST_REPLACE,
    payload: { event: event, toReplace: toReplace }
  });
};

export const editEvent = event => dispatch => {
  dispatch({ type: HOST_EDIT_EVENT, payload: { event: event } });
  axios.post(hostRoot + 'edit_event', qs.stringify(event));
};

export const checkSignupCode = code => async dispatch => {
  dispatch({ type: HOST_CHECK_SIGNUP_CODE });
  const res = await axios.post(
    hostRoot + 'check_code',
    qs.stringify({ code: code })
  );
  dispatch({ type: HOST_CHECKED_SIGNUP_CODE, payload: res.data });
};

export const resetSignupCode = () => dispatch => {
  dispatch({ type: HOST_RESET_SIGNUP_EVENT });
};

export const hostCheckIn = (event, guest) => dispatch => {
  axios.post(
    hostRoot + 'check_in',
    qs.stringify({ event: event._id, guest: guest._id })
  );
  dispatch({ type: HOST_CHECKIN });
};
