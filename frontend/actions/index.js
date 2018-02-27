import axios from 'axios';
import {FETCH_USER, ADD_EVENT, GET_EVENTS, SELECT_EVENT} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};
var qs = require('qs');

export const addEvent = (event) => async dispatch => {
    var qs = require('qs');
    await axios.post('/api/add_event', qs.stringify(event));
    dispatch({type: ADD_EVENT, payload: event});
};

export const getEvents = () => async dispatch=>{
    const res = await axios.get('/api/get_events');
    console.log(res.data);
    dispatch({type:GET_EVENTS, payload: res.data});
};

export const selectEvent = (event) => async dispatch=>{
    dispatch({type:SELECT_EVENT, payload: event});
};
