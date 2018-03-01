import {
    HOST_GET_EVENTS, HOST_ADD_EVENT, HOST_SELECT_EVENT, HOST_REMOVE_EVENT, HOST_REPLACE,
    GUEST_GET_EVENTS, GUEST_JOIN_EVENT, GUEST_FIND_EVENT, GUEST_FOUND_EVENT, GUEST_RESET_JOIN_FIND
} from '../actions/types';
import {JOIN_FIND} from "../helpers";
import {guestInitial} from "./initialState";

export default function (state = guestInitial, action) {
    switch (action.type) {
        case GUEST_GET_EVENTS:
            return {...state, events: action.payload};
        case GUEST_JOIN_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
                eventToJoin: null,
                joinFind: JOIN_FIND.NOTHING_TO_CHECK
            };
        case GUEST_FIND_EVENT:
            return {...state, joinFind: JOIN_FIND.CHECKING};
        case GUEST_FOUND_EVENT:
            let jf = JOIN_FIND.FAIL;
            let toJoin = null;
            if (action.payload) {
                if (state.events.filter(event => action.payload._id === event._id).length > 0)
                    jf = JOIN_FIND.ALREADY_JOINED;
                else {
                    jf = JOIN_FIND.SUCCESS;
                    toJoin = action.payload;
                }
            }
            return {...state, joinFind: jf, eventToJoin: toJoin};
        case GUEST_RESET_JOIN_FIND:
            return {...state, joinFind: JOIN_FIND.NOTHING_TO_CHECK};
        default:
            return state;
    }
}
