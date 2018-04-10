import {
  HOST_GET_EVENTS,
  HOST_ADD_EVENT,
  HOST_REMOVE_EVENT,
  HOST_REPLACE,
  HOST_EDIT_EVENT,
  HOST_CHECK_SIGNUP_CODE,
  HOST_CHECKED_SIGNUP_CODE,
  HOST_GOT_EVENTS,
  HOST_RESET_SIGNUP_EVENT,
  HOST_CHECKIN,
  REMOVE_GROUP,
  GOT_GROUPS,
  GET_GROUPS,
  ADD_GROUP
} from '../actions/types';
import { CHECK_CODE, LOAD } from '../helpers/Enums';
import { hostInitial } from './index';

export default function(state = hostInitial, action) {
  switch (action.type) {
    case HOST_ADD_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    case HOST_GET_EVENTS:
      return { ...state, events: LOAD.LOADING };
    case HOST_GOT_EVENTS:
      return { ...state, events: action.payload };
    case HOST_REMOVE_EVENT: {
      let newEvents = state.events.slice();
      newEvents = newEvents.filter(el => el._id !== action.payload._id);
      return { ...state, events: newEvents };
    }
    case HOST_REPLACE: {
      let newEvents = state.events.slice();
      newEvents = newEvents.filter(el => el !== action.payload.toReplace);
      newEvents.push(action.payload.event);
      return { ...state, events: newEvents };
    }
    case HOST_EDIT_EVENT: {
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
    case HOST_CHECK_SIGNUP_CODE:
      return { ...state, checkCode: CHECK_CODE.CHECKING };
    case HOST_CHECKED_SIGNUP_CODE:
      return {
        ...state,
        checkCode: action.payload ? CHECK_CODE.AVAILABLE : CHECK_CODE.TAKEN
      };
    case HOST_RESET_SIGNUP_EVENT:
      return { ...state, checkCode: CHECK_CODE.NOTHING };
    case HOST_CHECKIN:
      return state;
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
    default:
      return state;
  }
}
