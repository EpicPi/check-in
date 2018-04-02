import * as axios from 'axios';
import * as qs from 'qs';
import {
  GUEST_CHECK_CHECKIN_CODE,
  GUEST_CHECKED_CHECKIN_CODE,
  GUEST_CHECKIN,
  GUEST_FIND_EVENT,
  GUEST_FOUND_EVENT,
  GUEST_GET_EVENTS,
  GUEST_GOT_EVENTS,
  GUEST_JOIN_EVENT,
  GUEST_RESET_CHECKIN_CODE,
  GUEST_RESET_JOIN_FIND
} from './types';
import { guestRoot } from './index';

export const joinEvent = event => dispatch => {
  axios.post(guestRoot + 'join', qs.stringify({ id: event._id }));
  dispatch({ type: GUEST_JOIN_EVENT, payload: event });
};

export const findEvent = code => async dispatch => {
  dispatch({ type: GUEST_FIND_EVENT });
  const res = await axios.post(
    guestRoot + 'find',
    qs.stringify({ code: code })
  );
  dispatch({ type: GUEST_FOUND_EVENT, payload: res.data });
};

export const guestGetEvents = () => async dispatch => {
  dispatch({ type: GUEST_GET_EVENTS });
  const res = await axios.get(guestRoot + 'get_events');
  dispatch({ type: GUEST_GOT_EVENTS, payload: res.data });
};

export const resetJoinFind = () => dispatch => {
  dispatch({ type: GUEST_RESET_JOIN_FIND });
};

export const checkin = event => dispatch => {
  axios.post(guestRoot + 'checkin', qs.stringify({ id: event._id }));
  dispatch({ type: GUEST_CHECKIN });
};

export const checkCheckinCode = (event, code) => async dispatch => {
  dispatch({ type: GUEST_CHECK_CHECKIN_CODE });
  const res = await axios.post(
    guestRoot + 'check_checkin',
    qs.stringify({ id: event._id, code: code })
  );
  dispatch({ type: GUEST_CHECKED_CHECKIN_CODE, payload: res.data });
};

export const resetCheckin = () => dispatch => {
  dispatch({ type: GUEST_RESET_CHECKIN_CODE });
};
