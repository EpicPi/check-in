import React, { Component } from 'react';
import Event from './Event';

class ViewEvents extends Component {
  render() {
    const events = this.props.events.map((event, i) => (
      <div key={i}>
        <Event name={event.name} code={event.code}/>
      </div>
    ));

    return (
      <ul>
        {events}
      </ul>
    );
  }
}

export default ViewEvents;
