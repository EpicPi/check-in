import {FETCH_USER, SET_USER_TYPE} from "./types";
import axios from "axios/index";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};


export const setUserType = (userType) => dispatch => {
    dispatch({type:SET_USER_TYPE, payload:userType});
}
