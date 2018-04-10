import React, { Component } from 'react';
import EventForm from './Form/EventForm';

class EditEvent extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="text-left">Edit Event</h2>
            <br />
          </div>
        </div>
        <EventForm history={this.props.history} add={false} />
      </div>
    );
  }
}

export default EditEvent;
