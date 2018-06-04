import { combineReducers } from 'redux';
import authreducer from './authreducer';
import hostEventReducer from './hostReducer';
import guestEventReducer from './guestReducer';
import eventReducer from './eventReducer';
import groupReducer from './groupReducer';
import { CHECK_CHECKIN, CHECK_CODE, JOIN_FIND, LOAD } from '../helpers/Enums';

export const authInitial = {
  user: null,
  userType: null
};

export const guestInitial = {
  events: LOAD.NOTHING,
  joinFind: JOIN_FIND.NOTHING,
  eventToJoin: {},
  checkCode: CHECK_CHECKIN.NOTHING
};

export const hostInitial = {
  events: LOAD.NOTHING,
  groups: LOAD.NOTHING,
  checkCode: CHECK_CODE.NOTHING
};

export const eventInitial = {
  selected: {},
  selectedRsvps: LOAD.NOTHING,
  selectedAttends: LOAD.NOTHING
};

export const groupInitial = {
  selected: {},
  checkCode: JOIN_FIND.NOTHING,
  events: LOAD.NOTHING
};

//this has to be at the bottom cause code dependency reasons
export default combineReducers({
  auth: authreducer,
  host: hostEventReducer,
  guest: guestEventReducer,
  event: eventReducer,
  group: groupReducer
});
