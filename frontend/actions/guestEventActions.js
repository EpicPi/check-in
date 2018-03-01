import * as axios from "axios";
import * as qs from "qs";
import {GUEST_GET_EVENTS, GUEST_JOIN_EVENT, GUEST_REMOVE_EVENT, GUEST_SELECT_EVENT} from "./types";

export const guestJoinEvent = (code) => async dispatch => {
    const res = axios.post('/api/guest/join', qs.stringify())
    dispatch({type: GUEST_JOIN_EVENT, payload: res.data});
};

export const guestGetEvents = () => async dispatch => {
    const res = await axios.get('/api/guest/get_events');
    dispatch({type: GUEST_GET_EVENTS, payload: res.data});
};

export const guestSelectEvent = (event) => async dispatch => {
    dispatch({type: GUEST_SELECT_EVENT, payload: event});
};

export const guestRemoveEvent = (event) => dispatch => {
    dispatch({type: GUEST_REMOVE_EVENT, payload: event});
    axios.post('/api/guest/remove_event', qs.stringify(event));
};
