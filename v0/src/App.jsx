import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuestDash from './Guest/GuestDash';
import HostDash from './Host/HostDash';

import NameForm from './NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNameInput(name, type) {
    this.setState({
      name,
      type,
    });
  }

  render() {
    const hostPage = (
      <HostDash name={this.state.name} />
    );

    const guestPage = (
      <GuestDash name={this.state.name} />
    );

    const namePage = (
      <NameForm handleName={this.handleNameInput} />
    );

    return (
      <div>
        <h1>Welcome to Check-in!</h1>
        { !this.state.name ? namePage : this.state.type === 'host' ? hostPage : guestPage }
        {/* <BrowserRouter> */}
        {/* <div> */}
        {/* <Switch> */}
        {/* <Route exact path="/host" component={HostDash} /> */}
        {/* <Route exact path="/guest" component={GuestDash} /> */}
        {/* </Switch> */}
        {/* </div> */}
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
