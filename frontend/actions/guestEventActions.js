import * as axios from "axios";
import * as qs from "qs";

export const guestJoinEvent = (code) => async dispatch=>{
    const res = axios.post('/api/guest/join',qs.stringify())
};
