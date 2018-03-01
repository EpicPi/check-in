import axios from 'axios';
import {FETCH_USER} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export * from './hostEventActions';

export * from './guestEventActions';
