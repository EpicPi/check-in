import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './assets/stylesheets/base.scss';


const store = configureStore(); //this is the correct way but i cant get it to work
// const store = createStore(reducers ,{}, applyMiddleware(reduxThunk));
render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);


