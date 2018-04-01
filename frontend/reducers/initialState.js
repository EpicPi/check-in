import { CHECK_CHECKIN, CHECK_CODE, JOIN_FIND, LOAD } from '../helpers/Enums';

export const authInitial = {
  user: null,
  userType: null
};

export const guestInitial = {
  events: LOAD.NOTHING,
  joinFind: JOIN_FIND.NOTHING,
  eventToJoin: { name: 'erger', code: 'fwwfe' },
  checkCode: CHECK_CHECKIN.NOTHING
};

export const hostInitial = {
  events: LOAD.NOTHING,
  checkCode: CHECK_CODE.NOTHING
};

export const eventInitial = {
  selected: {},
  selectedRsvps: LOAD.NOTHING,
  selectedAttends: LOAD.NOTHING
};

export const openInitial = {
  openRsvp: []
};
