import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import HostHome from './HostHome';
import CreateEventForm from './CreateEventForm';
import ViewEvents from './ViewEvents';

class HostDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(event) {
    const prevEvents = this.state.events;
    prevEvents.push(event);
    this.setState({ events: prevEvents });
    console.log(this.state.events);
  }

  render() {
    return (
      <div>
        <h1>Host { this.props.name }!</h1>
        <CreateEventForm addEvent={this.addEvent} />
        <ViewEvents events={this.state.events} />
      </div>
    );
  }
}

export default HostDash;