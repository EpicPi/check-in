import {
  GET_ATTENDS,
  GET_RSVPS,
  GOT_ATTENDS,
  GOT_RSVPS,
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
      return { ...state, selectedRsvps: action.payload };
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
    case REPLACE_RSVPS:
      return { ...state, event: LOAD.LOADING };
    case REPLACED_RSVPS:
      return {
        ...state,
        event: action.payload,
        selectedRsvps: action.payload.guestsRSVP
      };
    default:
      return state;
  }
}
