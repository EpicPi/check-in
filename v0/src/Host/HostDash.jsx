import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateEventForm from './CreateEventForm';


class HostDash extends Component {


  render() {
    return (
      <div>
        <h1>Host { this.props.name }!</h1>
        <Switch>
          <Route exact path="/" component="HostHome" />
          <Route path="/create" component={ CreateEventForm } />
          <Route path="/view" component={ ViewEvents }/>
        </Switch>
        <button>create an event</button>
        <button>view my events</button>
      </div>
    );
  }
}

export default HostDash;
