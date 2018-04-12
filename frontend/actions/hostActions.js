import {
  ADD_GROUP,
  EDIT_GROUP,
  GET_GROUPS,
  GOT_GROUPS,
  HOST_ADD_EVENT,
  HOST_CHECK_SIGNUP_CODE,
  HOST_CHECKED_SIGNUP_CODE,
  HOST_CHECKIN,
  HOST_EDIT_EVENT,
  HOST_GET_EVENTS,
  HOST_GOT_EVENTS,
  HOST_REMOVE_EVENT,
  HOST_REPLACE,
  HOST_RESET_SIGNUP_EVENT,
  LEAVE_GROUP
} from './types';
import axios from 'axios/index';
import * as qs from 'qs';
import { groupRoute, hostRoute } from './index';

export const createEvent = event => async dispatch => {
  dispatch({ type: HOST_ADD_EVENT, payload: event });
  const event2 = await axios.post(hostRoute + 'add_event', qs.stringify(event));
  dispatch(replaceEvent(event2.data, event));
};

export const editEvent = event => dispatch => {
  dispatch({ type: HOST_EDIT_EVENT, payload: { event: event } });
  axios.post(hostRoute + 'edit_event', qs.stringify(event));
};

export const hostRemoveEvent = event => dispatch => {
  dispatch({ type: HOST_REMOVE_EVENT, payload: event });
  axios.post(hostRoute + 'remove_event', qs.stringify(event));
};

export const hostGetEvents = () => async dispatch => {
  dispatch({ type: HOST_GET_EVENTS });
  const res = await axios.get(hostRoute + 'get_events');
  dispatch({ type: HOST_GOT_EVENTS, payload: res.data });
};

export const replaceEvent = (event, toReplace) => dispatch => {
  dispatch({
    type: HOST_REPLACE,
    payload: { event: event, toReplace: toReplace }
  });
};

export const checkSignupCode = code => async dispatch => {
  dispatch({ type: HOST_CHECK_SIGNUP_CODE });
  const res = await axios.post(
    hostRoute + 'check_code',
    qs.stringify({ code: code })
  );
  dispatch({ type: HOST_CHECKED_SIGNUP_CODE, payload: res.data });
};

export const resetSignupCode = () => dispatch => {
  dispatch({ type: HOST_RESET_SIGNUP_EVENT });
};

export const hostCheckIn = (event, guest) => dispatch => {
  axios.post(
    hostRoute + 'check_in',
    qs.stringify({ event: event._id, guest: guest._id })
  );
  dispatch({ type: HOST_CHECKIN });
};

export const hostGetGroups = () => async dispatch => {
  dispatch({ type: GET_GROUPS });
  const res = await axios.get(hostRoute + 'get_groups');
  dispatch({ type: GOT_GROUPS, payload: res.data });
};

export const hostJoinGroup = group => async dispatch => {
  const res = await axios.post(
    groupRoute + 'join',
    qs.stringify({ id: group._id })
  );
  dispatch({ type: ADD_GROUP, payload: res.data });
};

export const hostCreateGroup = group => async dispatch => {
  const res = await axios.post(groupRoute + 'create', qs.stringify(group));
  dispatch({ type: ADD_GROUP, payload: res.data });
};

export const hostEditGroup = group => dispatch => {
  dispatch({ type: EDIT_GROUP, payload: { group: group } });
  axios.post(groupRoute + 'edit', qs.stringify(group));
};

export const hostLeaveGroup = group => async dispatch => {
  dispatch({ type: LEAVE_GROUP, payload: group });
  axios.post(groupRoute + 'leave', qs.stringify({ id: group._id }));
};
