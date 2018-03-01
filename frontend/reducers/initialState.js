import {JOIN_FIND} from "../helpers";

export const authInitial = {user: null, userType: null};
export const guestInitial = {
    events: [],
    joinFind: JOIN_FIND.NOTHING_TO_CHECK,
    eventToJoin: {name: 'erger', code: 'fwwfe'},
    electedEvent: {name: 'gerge', code: 'fsdfs'}
};

export const hostInitial = {
    events: [],
    selectedEvent: {name: 'gerge', code: 'fsdfs'}
};
