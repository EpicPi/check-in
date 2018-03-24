import {
  GUEST_GET_EVENTS,
  GUEST_JOIN_EVENT,
  GUEST_FIND_EVENT,
  GUEST_FOUND_EVENT,
  GUEST_RESET_JOIN_FIND,
  GUEST_CHECKIN,
  GUEST_GOT_EVENTS,
  GUEST_CHECK_CHECKIN,
  GUEST_CHECKED_CHECKIN,
  GUEST_RESET_CHECKIN
} from '../actions/types';
import { CHECK_CHECKIN, JOIN_FIND, LOAD } from '../helpers/Enums';
import { guestInitial } from './initialState';

export default function(state = guestInitial, action) {
  switch (action.type) {
    case GUEST_GET_EVENTS:
      return { ...state, events: LOAD.LOADING };
    case GUEST_GOT_EVENTS:
      return { ...state, events: action.payload };
    case GUEST_JOIN_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        eventToJoin: null,
        joinFind: JOIN_FIND.NOTHING_TO_CHECK
      };
    case GUEST_FIND_EVENT:
      return { ...state, joinFind: JOIN_FIND.CHECKING };
    case GUEST_FOUND_EVENT:
      let jf = JOIN_FIND.FAIL;
      let toJoin = null;
      if (action.payload) {
        if (
          state.events.filter(event => action.payload._id === event._id)
            .length > 0
        )
          jf = JOIN_FIND.ALREADY_JOINED;
        else {
          jf = JOIN_FIND.SUCCESS;
          toJoin = action.payload;
        }
      }
      return { ...state, joinFind: jf, eventToJoin: toJoin };
    case GUEST_RESET_JOIN_FIND:
      return { ...state, joinFind: JOIN_FIND.NOTHING_TO_CHECK };
    case GUEST_CHECKIN:
      return state;
    case GUEST_CHECK_CHECKIN:
      return { ...state, check: CHECK_CHECKIN.CHECKING };
    case GUEST_CHECKED_CHECKIN:
      return {
        ...state,
        check: action.payload ? CHECK_CHECKIN.SUCCESS : CHECK_CHECKIN.FAIL
      };
    case GUEST_RESET_CHECKIN:
      return { ...state, check: CHECK_CHECKIN.NOTHING_TO_CHECK };
    default:
      return state;
  }
}
