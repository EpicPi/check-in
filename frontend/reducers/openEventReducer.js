import {
  OPEN_GET_EVENT,
  OPEN_GOT_EVENT,
  OPEN_JOIN_EVENT,
  REPLACE_RSVPS,
  REPLACED_RSVPS
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
    case REPLACE_RSVPS:
      return { ...state, event: LOAD.LOADING };
    case REPLACED_RSVPS:
      return { ...state, event: action.payload };
    default:
      return state;
  }
}
