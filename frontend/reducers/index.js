// function rootReducer(state = {name: 'Horizons'}, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }
//
// export default rootReducer;
//idk what the above does

import {combineReducers} from 'redux';
import authreducer from './authreducer';

export default combineReducers({
    auth:authreducer,
})
