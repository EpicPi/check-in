import {GET_EVENTS, ADD_EVENT, FETCH_USER} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        case GET_EVENTS:
            return {...state, events: action.payload};
        default:
            return state;
    }
}
