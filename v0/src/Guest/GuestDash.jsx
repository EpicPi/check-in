import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class GuestDash extends Component {
  constructor(props){
    super(props);
      this.cookies = new Cookies();
  }
  render() {
    console.log(this.cookies.get('name'));
    return (
      <h1>Guest { this.props.name }!</h1>
    );
  }
}

export default GuestDash;
