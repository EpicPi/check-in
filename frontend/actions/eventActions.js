import {GET_ATTENDS, GET_RSVPS, SELECT_EVENT} from "./types";
import * as axios from "axios";
import * as qs from "qs";

export const selectEvent = (event) => async dispatch=>{
    dispatch({type:SELECT_EVENT, payload: event});
};

export const getRSVPs = (event) => async dispatch => {
    const res = await axios.post('/api/event/rsvp', qs.stringify({id: event._id}));
    dispatch({type: GET_RSVPS, payload: res.data});
};
export const getAttends = (event) => async dispatch => {
    const res = await axios.post('/api/event/attend', qs.stringify({id: event._id}));
    dispatch({type: GET_ATTENDS, payload: res.data});
};
