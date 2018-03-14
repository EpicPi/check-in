import * as axios from "axios";
import * as qs from "qs";
import {
    GUEST_CHECK_CHECKIN, GUEST_CHECKED_CHECKIN,
    GUEST_CHECKIN,
    GUEST_FIND_EVENT, GUEST_FOUND_EVENT, GUEST_GET_EVENTS, GUEST_GOT_EVENTS, GUEST_JOIN_EVENT, GUEST_REMOVE_EVENT,
    GUEST_RESET_JOIN_FIND,
} from "./types";

export const guestJoinEvent = (event) => dispatch => {
    axios.post('/api/guest/join', qs.stringify({id: event._id}));
    dispatch({type: GUEST_JOIN_EVENT, payload: event});
};

export const guestFindEvent = (code) => async dispatch => {
    dispatch({type: GUEST_FIND_EVENT});
    const res = await axios.post('/api/guest/find', qs.stringify({code: code}));
    dispatch({type: GUEST_FOUND_EVENT, payload: res.data});
};

export const guestGetEvents = () => async dispatch => {
    dispatch({type:GUEST_GET_EVENTS});
    const res = await axios.get('/api/guest/get_events');
    dispatch({type: GUEST_GOT_EVENTS, payload: res.data});
};

//TODO
export const guestRemoveEvent = (event) => dispatch => {
    dispatch({type: GUEST_REMOVE_EVENT, payload: event});
    axios.post('/api/guest/remove_event', qs.stringify(event));
};

export const guestResetJoinFind = () => dispatch => {
    dispatch({type: GUEST_RESET_JOIN_FIND});
};

export const guestCheckIn = (event) => dispatch => {
    axios.post('api/guest/checkin', qs.stringify({id: event._id}));
    dispatch({type: GUEST_CHECKIN});
};

export const guestCheckCheckIn = (event, code) => dispatch =>{
    dispatch({type: GUEST_CHECK_CHECKIN});
    const res = axios.post('/api/guest/check_checkin', qs.stringify({id: event._id, code:code}));
    dispatch({type:GUEST_CHECKED_CHECKIN, payload: res.data});
};
