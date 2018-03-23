import React, { Component } from 'react';
import HostEvent from './HostEvent';

class HostCreateEvent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Create Event</h2>
            <HostEvent history={this.props.history} add={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default HostCreateEvent;
