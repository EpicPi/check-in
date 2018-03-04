import {CHECK_CODE, JOIN_FIND, LOAD} from "../helpers";

export const authInitial = {user: null, userType: null};
export const guestInitial = {
    events: LOAD.NOTHING,
    joinFind: JOIN_FIND.NOTHING_TO_CHECK,
    eventToJoin: {name: 'erger', code: 'fwwfe'},
};

export const hostInitial = {
    events: LOAD.NOTHING,
    checkCode: CHECK_CODE.NOTHING_TO_CHECK
};
export const eventInitial ={
    selected: {},
    selectedRSVPs: [],
    selectedAttends: [],
};
