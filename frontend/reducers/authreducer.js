import {FETCH_USER, SET_USER_TYPE} from '../actions/types';

export default function (state = {user: null, userType: null}, action) {
    switch (action.type) {
        case FETCH_USER:
            return {...state, user: (action.payload || false)};
        case SET_USER_TYPE:
            return {...state, userType: action.payload};
        default:
            return state;
    }
}
