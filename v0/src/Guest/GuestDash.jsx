import React, { Component } from 'react';

class GuestDash extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <h1>Guest { this.props.name }!</h1>
    );
  }
}

export default GuestDash;
