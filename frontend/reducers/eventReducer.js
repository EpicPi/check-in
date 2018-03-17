import {
    GET_ATTENDS,
    GET_RSVPS,
    GOT_ATTENDS,
    GOT_RSVPS,
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
            return { ...state, selectedRSVPs: LOAD.LOADING };
        case GOT_RSVPS:
            return { ...state, selectedRSVPs: action.payload };
        case GET_ATTENDS:
            return { ...state, selectedAttends: LOAD.LOADING };
        case GOT_ATTENDS:
            return { ...state, selectedAttends: action.payload };
        case RESET_EVENT:
            return eventInitial;
        default:
            return state;
    }
}
