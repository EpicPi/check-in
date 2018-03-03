import {JOIN_FIND} from "../helpers";

export const authInitial = {user: null, userType: null};
export const guestInitial = {
    events: [],
    joinFind: JOIN_FIND.NOTHING_TO_CHECK,
    eventToJoin: {name: 'erger', code: 'fwwfe'},
};

export const hostInitial = {
    events: [],
};
export const eventInitial ={
    selected: {name: 'gerge', code: 'fsdfs'},
    selectedRSVPs: [],
    selectedAttends: [],
};
