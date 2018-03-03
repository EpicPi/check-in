import {GET_ATTENDS, GET_RSVPS, SELECT_EVENT} from "../actions/types";
import {eventInitial} from "./initialState";


export default function (state = eventInitial, action) {
    switch (action.type) {
        case SELECT_EVENT:
            return {...state, selected: action.payload};
        case GET_ATTENDS:
            return {...state, selectedRSVPs:action.payload};
        case GET_RSVPS:
            return {...state, selectedAttends: action.payload};
        default:
            return state;
    }
}
