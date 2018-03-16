import {
    GET_ATTENDS,
    GET_RSVPS,
    GOT_ATTENDS,
    GOT_RSVPS,
    RESET_EVENT,
    SELECT_EVENT
} from './types';
import * as axios from 'axios';
import * as qs from 'qs';

export const selectEvent = event => async dispatch => {
    dispatch({ type: SELECT_EVENT, payload: event });
};

export const getRSVPs = event => async dispatch => {
    dispatch({ type: GET_RSVPS });
    const res = await axios.post(
        '/api/event/rsvp',
        qs.stringify({ id: event._id })
    );
    dispatch({ type: GOT_RSVPS, payload: res.data });
};

export const getAttends = event => async dispatch => {
    dispatch({ type: GET_ATTENDS });
    const res = await axios.post(
        '/api/event/attend',
        qs.stringify({ id: event._id })
    );
    dispatch({ type: GOT_ATTENDS, payload: res.data });
};

export const resetEvent = () => dispatch => {
    dispatch({ type: RESET_EVENT });
};
