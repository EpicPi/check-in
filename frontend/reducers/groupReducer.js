import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  EDIT_GROUP,
  GET_GROUPS,
  GOT_GROUPS,
  GROUP_GET_EVENTS,
  GROUP_GOT_EVENTS,
  LEAVE_GROUP,
  REMOVE_GROUP,
  RESET_GROUP,
  RESET_GROUP_CHECK_CODE,
  SELECT_GROUP
} from '../actions/types';
import { CHECK_CODE, LOAD } from '../helpers/Enums';
import { groupInitial } from './index';

export default function(state = groupInitial, action) {
  switch (action.type) {
    case CHECK_GROUP_CODE:
      return { ...state, checkCode: CHECK_CODE.CHECKING };
    case CHECKED_GROUP_CODE:
      return {
        ...state,
        checkCode: action.payload ? action.payload : CHECK_CODE.AVAILABLE
      };
    case RESET_GROUP:
      return { ...state, selected: groupInitial.selected };
    case SELECT_GROUP:
      return { ...state, selected: action.payload };

    case RESET_GROUP_CHECK_CODE:
      return { ...state, checkCode: CHECK_CODE.NOTHING };
    case GROUP_GET_EVENTS:
      return { ...state, events: LOAD.LOADING };
    case GROUP_GOT_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
}
