import axios from 'axios/index';
import * as qs from 'qs';
import { groupRoute } from './index';
import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  GET_GROUPS,
  GOT_GROUPS,
  REMOVE_GROUP,
  RESET_GROUP,
  SELECT_GROUP
} from './types';

export const createGroup = group => async dispatch => {
  const group2 = await axios.post(
    groupRoute + 'add_group',
    qs.stringify(group)
  );
  dispatch({ type: ADD_GROUP, payload: group2 });
};

export const getGroups = () => async dispatch => {
  dispatch({ type: GET_GROUPS });
  const res = await axios.get(groupRoute + 'get_groups');
  dispatch({ type: GOT_GROUPS, payload: res.data });
};

export const removeGroup = group => dispatch => {
  dispatch({ type: REMOVE_GROUP, payload: group });
  axios.post(groupRoute + 'remove_group', qs.stringify({ id: group.id }));
};

export const joinGroup = group => async dispatch => {
  dispatch({ type: ADD_GROUP, payload: group });
  await axios.post(groupRoute + 'join', qs.stringify({ id: group.id }));
};

export const checkGroupCode = code => async dispatch => {
  dispatch({ type: CHECK_GROUP_CODE });
  const res = axios.post(groupRoute + 'check', qs.stringify({ code: code }));
  dispatch({ type: CHECKED_GROUP_CODE, payload: res });
};

export const resetGroup = () => dispatch => {
  dispatch({ type: RESET_GROUP });
};

export const selectGroup = group => dispatch => {
  dispatch({ type: SELECT_GROUP, payload: group });
};
