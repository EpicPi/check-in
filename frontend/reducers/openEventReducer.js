import {
  OPEN_GET_RSVP,
  OPEN_GOT_RSVP,
  OPEN_JOIN_EVENT,
  OPEN_UPDATE_RSVP
} from '../actions/types';
import { LOAD } from '../helpers/Enums';
import { openInitial } from './initialState';

export default function(state = openInitial, action) {
  switch (action.type) {
    case OPEN_GET_RSVP:
      return { ...state, openRsvp: [] };
    case OPEN_GOT_RSVP:
      return { ...state, openRsvp: action.payload };
    case OPEN_UPDATE_RSVP:
      return { ...state, openRsvp: action.payload };
    default:
      return state;
  }
}
