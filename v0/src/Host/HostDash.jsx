import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import HostHome from './HostHome';
import CreateEventForm from './CreateEventForm';
import ViewEvents from './ViewEvents';

class HostDash extends Component {
  render() {
    return (
      <div>
        <h1>Host { this.props.name }!</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HostHome} />
            <Route path="/create" component={CreateEventForm} />
            <Route path="/view" component={ViewEvents} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default HostDash;
