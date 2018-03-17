import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

import HostDash from './Host/HostDash';
import Land from './Land';
import GuestDash from './Guest/GuestDash';
import EventDash from './Event/EventDash';
import requireAuth from '../helpers/requireAuth';

class AppContainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <Switch>
                                    <Route exact path="/" component={Land} />
                                    <Route
                                        path="/event/:id"
                                        component={EventDash}
                                    />
                                    <Route
                                        path="/host"
                                        component={requireAuth(HostDash)}
                                    />
                                    <Route
                                        path="/guest"
                                        component={requireAuth(GuestDash)}
                                    />
                                    <Route component={Land} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppContainer;
