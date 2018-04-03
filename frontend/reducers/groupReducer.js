import { groupInitial } from './initialState';
import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  GET_GROUPS,
  GOT_GROUPS,
  REMOVE_GROUP,
  RESET_GROUP,
  SELECT_GROUP
} from '../actions/types';
import { CHECK_CODE, LOAD } from '../helpers/Enums';

export default function(state = groupInitial, action) {
  switch (action.type) {
    case ADD_GROUP:
      return { ...state, groups: [...state.groups, action.payload] };
    case GET_GROUPS:
      return { ...state, groups: LOAD.LOADING };
    case GOT_GROUPS:
      return { ...state, groups: action.payload };
    case REMOVE_GROUP:
      let newGroups = state.groups.slice();
      newGroups = newGroups.filter(el => el._id !== action.payload._id);
      return { ...state, groups: newGroups };
    case CHECK_GROUP_CODE:
      return { ...state, checkCode: CHECK_CODE.CHECKING };
    case CHECKED_GROUP_CODE:
      return {
        ...state,
        checkCode: action.payload ? CHECK_CODE.AVAILABLE : action.payload
      };
    case RESET_GROUP:
      return { ...state, selected: groupInitial.selected };
    case SELECT_GROUP:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
