import {
    HOST_GET_EVENTS, HOST_ADD_EVENT, HOST_SELECT_EVENT, HOST_REMOVE_EVENT, HOST_REPLACE,
    HOST_EDIT_EVENT
} from '../actions/types';
import {hostInitial} from "./initialState";

export default function (state = hostInitial, action) {
    switch (action.type) {
        case HOST_ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        case HOST_GET_EVENTS:
            return {...state, events: action.payload};
        case HOST_SELECT_EVENT:
            return {...state, selectedEvent: action.payload};
        case HOST_REMOVE_EVENT: {
            let newEvents = state.events.slice();
            newEvents = newEvents.filter(el => el._id !== action.payload._id);
            return {...state, events: newEvents};
        }
        case HOST_REPLACE: {
            let newEvents = state.events.slice();
            newEvents = newEvents.filter(el => el !== action.payload.toReplace);
            newEvents.push(action.payload.event);
            return {...state, events: newEvents};
        }
        case HOST_EDIT_EVENT: {
            let newEvents = state.events.slice();
            newEvents = newEvents.map(el => {
                if (el._id !== action.payload.event._id) {
                    return el;
                } else {
                    return action.payload.event;
                }
            });
            return {...state, events: newEvents};
        }
        default:
            return state;
    }
}
