import { createStore } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';
import {applyMiddleware, compose} from "redux/index";

export function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(reduxThunk)
        )
    );
}
