import {GET_EVENTS, ADD_EVENT, SELECT_EVENT} from '../actions/types';

export default function (state = {events: [], selectedEvent: {name:'gerge', code:'fsdfs'}}, action) {
    switch (action.type) {
        case ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        case GET_EVENTS:
            return {...state, events: action.payload};
        case SELECT_EVENT:
            return {...state, selectedEvent: action.payload};
        default:
            return state;
    }
}
