import {
  OPEN_GET_EVENT,
  OPEN_GET_RSVP,
  OPEN_GOT_EVENT,
  OPEN_GOT_RSVP,
  OPEN_JOIN_EVENT,
  OPEN_UPDATE_RSVP,
  UPDATE_RSVPS,
  UPDATED_RSVPS
} from '../actions/types';
import { LOAD } from '../helpers/Enums';
import { openInitial } from './initialState';

export default function(state = openInitial, action) {
  switch (action.type) {
    case OPEN_GET_EVENT:
      return { ...state, event: LOAD.LOADING };
    case OPEN_GOT_EVENT:
      return {
        ...state,
        event: action.payload ? action.payload : LOAD.NOTHING
      };
    // TODO: checkCode openEventActions.js
    case OPEN_JOIN_EVENT:
      return {
        ...state,
        event: LOAD.NOTHING
      };
    case OPEN_GET_RSVP:
      return { ...state, openRsvp: LOAD.LOADING };
    case OPEN_GOT_RSVP:
      return { ...state, openRsvp: action.payload };
    case OPEN_UPDATE_RSVP:
      return { ...state, openRsvp: action.payload };
    default:
      return state;
  }
}
