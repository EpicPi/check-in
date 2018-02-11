import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <div>
        <div>
          Name: {this.props.name}
        </div>
        <div>
          Code: {this.props.code}
        </div>
      </div>
    );
  }
}

export default Event;
