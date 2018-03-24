import React, { Component } from 'react';
import EventForm from './EventForm';

class CreateEvent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Create Event</h2>
            <EventForm history={this.props.history} add={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
