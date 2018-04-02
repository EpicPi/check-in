import { combineReducers } from 'redux';
import authreducer from './authreducer';
import hostEventReducer from './hostEventReducer';
import guestEventReducer from './guestEventReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  auth: authreducer,
  host: hostEventReducer,
  guest: guestEventReducer,
  event: eventReducer
});
