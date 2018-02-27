import {combineReducers} from 'redux';
import authreducer from './authreducer';
import eventReducer from "./eventReducer";

export default combineReducers({
    auth:authreducer,
    eve: eventReducer
})
