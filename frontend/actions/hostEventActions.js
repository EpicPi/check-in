import {
    HOST_ADD_EVENT, HOST_EDIT_EVENT, HOST_GET_EVENTS, HOST_REMOVE_EVENT, HOST_REPLACE,
    HOST_SELECT_EVENT
} from "./types";
import axios from "axios/index";
import * as qs from 'qs';

export const hostAddEvent = (event) => async dispatch => {
    dispatch({type: HOST_ADD_EVENT, payload: event});
    const event2 = await axios.post('/api/host/add_event', qs.stringify(event));
    console.log(event2.data);
    dispatch(replaceEvent(event2.data,event));
};

export const hostGetEvents = () => async dispatch=>{
    const res = await axios.get('/api/host/get_events');
    dispatch({type:HOST_GET_EVENTS, payload: res.data});
};

export const hostRemoveEvent = (event) => dispatch =>{
    dispatch({type:HOST_REMOVE_EVENT, payload: event});
    axios.post('/api/host/remove_event', qs.stringify(event));
};

export const replaceEvent = (event, toReplace)=> dispatch=> {
    dispatch({type:HOST_REPLACE, payload:{event:event,toReplace:toReplace}});
};

export const hostEditEvent = (event) => dispatch=>{
    dispatch({type: HOST_EDIT_EVENT, payload:{event:event}});
    axios.post('/api/host/edit_event', qs.stringify(event));
};
