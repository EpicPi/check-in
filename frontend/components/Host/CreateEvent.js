import React, { Component } from 'react';
import EventForm from './Form/EventForm';

class CreateEvent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <h2 className="text-left">Create Event</h2>
            <br />
            <EventForm history={this.props.history} add={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
