import { SELECT_EVENT} from "./types";

export const selectEvent = (event) => async dispatch=>{
    dispatch({type:SELECT_EVENT, payload: event});
};

