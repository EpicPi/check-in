import { compose } from 'redux';
import DevTools from '../containers/DevTools';

import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';


export function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(reduxThunk),
            DevTools.instrument(),
        )

    );
}
