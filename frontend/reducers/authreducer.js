import { FETCH_USER, RESET_USER_TYPE, SET_USER_TYPE } from '../actions/types';
import { authInitial } from './index';

export default function(state = authInitial, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload || false };
    case SET_USER_TYPE:
      return { ...state, userType: action.payload };
    case RESET_USER_TYPE:
      return { ...state, userType: authInitial.userType };
    default:
      return state;
  }
}
