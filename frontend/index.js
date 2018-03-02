import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root/Root';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/stylesheets/base.scss';

const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
