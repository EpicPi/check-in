import { combineReducers } from 'redux';
import authreducer from './authreducer';
import hostEventReducer from './hostEventReducer';
import guestEventReducer from './guestEventReducer';
import eventReducer from './eventReducer';
import groupReducer from './groupReducer';

export default combineReducers({
  auth: authreducer,
  host: hostEventReducer,
  guest: guestEventReducer,
  event: eventReducer,
  group: groupReducer
});
