import {FETCH_USER, RESET_USER_TYPE, SET_USER_TYPE} from "./types";
import axios from "axios/index";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const setUserType = (userType) => dispatch => {
    dispatch({type: SET_USER_TYPE, payload: userType});
};

export const resetUserType = (userType) => dispatch => {
    dispatch({type: RESET_USER_TYPE, payload: userType});
};
