import React from 'react';
import { render } from 'react-dom';
// import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './assets/stylesheets/base.scss';
import {Provider} from "react-redux";
import App from "./components/App";

// const store = configureStore(); this is the correct way but i cant get it to work
const store = createStore(reducers ,{}, applyMiddleware(reduxThunk));
// render(
//     <Root store={store} history={history} />,
//     document.getElementById('root')
// );
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


