import * as qs from 'qs';
import { OPEN_GET_EVENT, OPEN_GOT_EVENT } from './types';
import axios from 'axios/index';

export const openGetEvent = code => async dispatch => {
    dispatch({ type: OPEN_GET_EVENT });
    const res = await axios.get('/api/open/get_event', {
        params: { code: code }
    });
    dispatch({ type: OPEN_GOT_EVENT, payload: res.data });
};
