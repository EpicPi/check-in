import axios from 'axios/index';
import * as qs from 'qs';
import { groupRoute } from './index';

export const createGroup = group => async dispatch => {
  const group2 = await axios.post(
    groupRoute + 'add_group',
    qs.stringify(group)
  );
  dispatch({ type: ADD_GROUP, payload: group });
};

export const getGroups = () => async dispatch => {
  dispatch({ type: GET_GROUPS });
  const res = await axios.get(groupRoute + 'get_groups');
  dispatch({ type: GOT_GROUPS, payload: res.data });
};
