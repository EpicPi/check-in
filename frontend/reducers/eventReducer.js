import {
  ADD_GUEST,
  CHANGE_GUEST,
  CLEAR_GUEST,
  GET_ATTENDS,
  GET_RSVPS,
  GOT_ATTENDS,
  GOT_RSVPS,
  REMOVE_GUEST,
  REPLACE_ALL_RSVPS,
  UPDATE_RSVPS,
  UPDATED_RSVPS,
  RESET_EVENT,
  SELECT_EVENT,
  OPEN_GET_RSVP,
  OPEN_GOT_RSVP,
  OPEN_UPDATE_RSVP
} from '../actions/types';
import { eventInitial } from './initialState';
import { LOAD } from '../helpers/Enums';

export default function(state = eventInitial, action) {
  switch (action.type) {
    case SELECT_EVENT:
      return { ...state, selected: action.payload };
    case GET_RSVPS:
      return { ...state, selectedRsvps: LOAD.LOADING };
    case GOT_RSVPS:
      let guests = action.payload.map(guest => guest.name);
      return { ...state, selectedRsvps: action.payload, guests: guests };
    case GET_ATTENDS:
      return {
        ...state,
        selectedAttends:
          state.selectedAttends === LOAD.NOTHING
            ? LOAD.LOADING
            : state.selectedAttends
      };
    case GOT_ATTENDS:
      return { ...state, selectedAttends: action.payload };
    case RESET_EVENT:
      return eventInitial;
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
