import {ADD_EVENT, GET_EVENTS, REMOVE_EVENT, SELECT_EVENT} from "./types";
import axios from "axios/index";

export const addEvent = (event) => async dispatch => {
    axios.post('/api/add_event', qs.stringify(event));
    dispatch({type: ADD_EVENT, payload: event});
};

export const getEvents = () => async dispatch=>{
    const res = await axios.get('/api/get_events');
    dispatch({type:GET_EVENTS, payload: res.data});
};

export const selectEvent = (event) => async dispatch=>{
    dispatch({type:SELECT_EVENT, payload: event});
};

export const removeEvent = (event) => dispatch =>{
    axios.post('/api/remove_event', qs.stringify(event));
    dispatch({type:REMOVE_EVENT, payload: event});
}
