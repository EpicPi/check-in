import axios from 'axios/index';
import * as qs from 'qs';
import { groupRoute } from './index';
import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  GET_GROUPS,
  GOT_GROUPS,
  GROUP_GET_EVENTS,
  GROUP_GOT_EVENTS,
  REMOVE_GROUP,
  RESET_GROUP,
  RESET_GROUP_CHECK_CODE,
  SELECT_GROUP
} from './types';

export const createGroup = group => async dispatch => {
  const res = await axios.post(groupRoute + 'add_group', qs.stringify(group));
  dispatch({ type: ADD_GROUP, payload: res.data });
};

export const editGroup = group => dispatch => {
  dispatch({ type: EDIT_GROUP, payload: { group: group } });
  axios.post(groupRoute + 'edit_group', qs.stringify(group));
};

export const getGroups = () => async dispatch => {
  dispatch({ type: GET_GROUPS });
  const res = await axios.get(groupRoute + 'get_groups');
  dispatch({ type: GOT_GROUPS, payload: res.data });
};

export const removeGroup = group => dispatch => {
  dispatch({ type: REMOVE_GROUP, payload: group });
  axios.post(groupRoute + 'remove_group', qs.stringify({ id: group._id }));
};

export const joinGroup = group => async dispatch => {
  dispatch({ type: ADD_GROUP, payload: group });
  await axios.post(groupRoute + 'join', qs.stringify({ id: group._id }));
};

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
