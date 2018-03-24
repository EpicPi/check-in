import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

import HostDash from './Host/Dash';
import Land from './Land';
import GuestDash from './Guest/Dash';
import EventDash from './OpenEvent/Dash';
import requireAuth from '../helpers/requireAuth';
import { hot } from 'react-hot-loader';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 offset-md-2">
                <Switch>
                  <Route exact path="/" component={Land} />
                  <Route exact path="/event/:id" component={EventDash} />
                  <Route path="/host" component={requireAuth(HostDash)} />
                  <Route path="/guest" component={requireAuth(GuestDash)} />
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

export default hot(module)(AppContainer);
