import {ADD_EVENT, GET_EVENTS, REMOVE_EVENT, REPLACE, SELECT_EVENT} from "./types";
import axios from "axios/index";
import * as qs from 'qs';

export const hostAddEvent = (event) => async dispatch => {
    dispatch({type: ADD_EVENT, payload: event});
    const event2 = await axios.post('/api/host/add_event', qs.stringify(event));
    console.log(event2.data);
    dispatch(replaceEvent(event2.data,event));
};

export const hostGetEvents = () => async dispatch=>{
    const res = await axios.get('/api/host/get_events');
    dispatch({type:GET_EVENTS, payload: res.data});
};

export const hostSelectEvent = (event) => async dispatch=>{
    dispatch({type:SELECT_EVENT, payload: event});
};

export const hostRemoveEvent = (event) => dispatch =>{
    dispatch({type:REMOVE_EVENT, payload: event});
    axios.post('/api/host/remove_event', qs.stringify(event));
};

export const replaceEvent = (event, toReplace)=> dispatch=> {
    dispatch({type:REPLACE, payload:{event:event,toReplace:toReplace}});
};
