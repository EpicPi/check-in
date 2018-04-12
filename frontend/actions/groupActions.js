import axios from 'axios/index';
import * as qs from 'qs';
import { groupRoute, hostRoute } from './index';
import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  GET_GROUPS,
  GOT_GROUPS,
  GROUP_ADD_EVENT,
  GROUP_GET_EVENTS,
  GROUP_GOT_EVENTS,
  LEAVE_GROUP,
  REMOVE_GROUP,
  RESET_GROUP,
  RESET_GROUP_CHECK_CODE,
  SELECT_GROUP
} from './types';
import { replaceEvent } from './hostActions';

export const checkGroupCode = code => async dispatch => {
  dispatch({ type: CHECK_GROUP_CODE });
  const res = await axios.post(
    groupRoute + 'check',
    qs.stringify({ code: code })
  );
  dispatch({ type: CHECKED_GROUP_CODE, payload: res.data });
};

export const resetGroup = () => dispatch => {
  dispatch({ type: RESET_GROUP });
};

export const resetGroupcheckCode = () => dispatch => {
  dispatch({ type: RESET_GROUP_CHECK_CODE });
};

export const selectGroup = group => dispatch => {
  dispatch({ type: SELECT_GROUP, payload: group });
};

export const getGroupEvents = group => async dispatch => {
  dispatch({ type: GROUP_GET_EVENTS });
  const res = await axios.post(
    groupRoute + 'get_events',
    qs.stringify({ id: group._id })
  );
  dispatch({ type: GROUP_GOT_EVENTS, payload: res.data });
};

export const createGroupEvent = event => async dispatch => {
  const res = await axios.post(hostRoute + 'add_event', qs.stringify(event));
  dispatch({ type: GROUP_ADD_EVENT, payload: res.data });
};

//remove group event
