import axios from 'axios';
import {FETCH_USER, ADD_EVENT, GET_EVENTS} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const addEvent = (event) => dispatch => {
    dispatch({type: ADD_EVENT, payload: event});
};

export const getEvents = () => async dispatch=>{
    const res = await axios.get('api/getEvents');
    dispatch({type:GET_EVENTS, payload: res});
};

