import {GET_EVENTS, ADD_EVENT, SELECT_EVENT, REMOVE_EVENT} from '../actions/types';

export default function (state = {events: [], selectedEvent: {name:'gerge', code:'fsdfs'}}, action) {
    switch (action.type) {
        case ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        case GET_EVENTS:
            return {...state, events: action.payload};
        case SELECT_EVENT:
            return {...state, selectedEvent: action.payload};
        case REMOVE_EVENT:
            let newEvents = state.events.slice();
            newEvents = newEvents.filter(el=> el._id !== action.payload._id );
            return {...state, events: newEvents};
        default:
            return state;
    }
}
