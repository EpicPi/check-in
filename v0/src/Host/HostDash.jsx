import React, { Component } from 'react';

class HostDash extends Component {

  render() {
    return (
      <h1>Host { this.props.name }!</h1>
    );
  }
}

export default HostDash;
