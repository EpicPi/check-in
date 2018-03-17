import * as qs from 'qs';
import { OPEN_GET_EVENT, OPEN_GOT_EVENT, OPEN_JOIN_EVENT } from './types';
import axios from 'axios/index';

export const openGetEvent = code => async dispatch => {
    dispatch({ type: OPEN_GET_EVENT });
    const res = await axios.get('/api/open/get_event', {
        params: { code: code }
    });
    dispatch({ type: OPEN_GOT_EVENT, payload: res.data });
};

export const openJoinEvent = (code, id) => async dispatch => {
    const res = await axios.post(
        '/api/open/join',
        qs.stringify({ code: code, id: id })
    );
    // TODO: check successfully joined or not
    dispatch({ type: OPEN_JOIN_EVENT, payload: res.data });
};
