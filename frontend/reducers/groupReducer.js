import {
  ADD_GROUP,
  CHECK_GROUP_CODE,
  CHECKED_GROUP_CODE,
  EDIT_GROUP,
  GET_GROUPS,
  GOT_GROUPS,
  GROUP_ADD_EVENT,
  GROUP_EDIT_EVENT,
  GROUP_GET_EVENTS,
  GROUP_GOT_EVENTS,
  GROUP_REMOVE_EVENT,
  LEAVE_GROUP,
  REMOVE_GROUP,
  RESET_GROUP,
  RESET_GROUP_CHECK_CODE,
  SELECT_GROUP
} from '../actions/types';
import { CHECK_CODE, JOIN_FIND, LOAD } from '../helpers/Enums';
import { groupInitial } from './index';

export default function(state = groupInitial, action) {
  switch (action.type) {
    case CHECK_GROUP_CODE:
      return { ...state, checkCode: JOIN_FIND.CHECKING };
    case CHECKED_GROUP_CODE:
      return {
        ...state,
        checkCode: action.payload ? action.payload : JOIN_FIND.FAIL
      };
    case RESET_GROUP:
      return groupInitial;
    case SELECT_GROUP:
      return { ...state, selected: action.payload };
    case RESET_GROUP_CHECK_CODE:
      return { ...state, checkCode: JOIN_FIND.NOTHING };
    case GROUP_GET_EVENTS:
      return { ...state, events: LOAD.LOADING };
    case GROUP_GOT_EVENTS:
      return { ...state, events: action.payload };
    case GROUP_ADD_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    case GROUP_REMOVE_EVENT: {
      let newEvents = state.events.slice();
      newEvents = newEvents.filter(el => el._id !== action.payload._id);
      return { ...state, events: newEvents };
    }
    case GROUP_EDIT_EVENT: {
      console.log(action.payload.event);
      let newEvents = state.events.slice();
      newEvents = newEvents.map(el => {
        if (el._id !== action.payload.event._id) {
          return el;
        } else {
          return action.payload.event;
        }
      });
      return { ...state, events: newEvents };
    }
    default:
      return state;
  }
}
