import {SELECT_EVENT} from "../actions/types";
import {eventInitial} from "./initialState";


export default function (state = eventInitial, action) {
    switch (action.type) {
        case SELECT_EVENT:
            return {...state, selected: action.payload};
        default:
            return state;
    }
}
