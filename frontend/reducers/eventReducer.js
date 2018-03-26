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
  REPLACE_RSVPS,
  REPLACED_RSVPS,
  RESET_EVENT,
  SELECT_EVENT
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
    case REPLACE_ALL_RSVPS:
      return { ...state, guests: action.payload };
    case REPLACE_RSVPS:
      return { ...state, guests: LOAD.LOADING };
    case REMOVE_GUEST:
      let removed_guests = [
        ...state.guests.slice(0, action.payload),
        ...state.guests.slice(action.payload + 1)
      ];
      return { ...state, guests: removed_guests };
    case CHANGE_GUEST:
      let change_guests = [
        ...state.guests.slice(0, action.payload.ind),
        action.payload.guest,
        ...state.guests.slice(action.payload.ind + 1)
      ];
      return { ...state, guests: change_guests };
    case ADD_GUEST:
      let add_guest = [...state.guests, ''];
      return { ...state, guests: add_guest };
    case CLEAR_GUEST:
      return { ...state, guests: [] };
    case REPLACED_RSVPS:
      return {
        ...state,
        event: action.payload,
        selectedRsvps: action.payload.guestsRSVP,
        guests: LOAD.NOTHING
      };
    default:
      return state;
  }
}
