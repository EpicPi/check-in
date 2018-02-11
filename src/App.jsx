import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuestDash from './Guest/GuestDash';
import HostDash from './Host/HostDash';
import fire from './firebase';

import NameForm from './NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
    };
      fire.database();

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

    const myGuestPage = (props) => {
      return (
          <GuestDash name={this.state.name}/>
      );
    };

    const myNamePage = (props) => {
      return(
          <NameForm handleName={this.handleNameInput} {...props}/>
      );
    };

    const myHostPage = (props) => {
      return(
          <HostDash
            name={this.state.name}
            {...props}
          />
      );
    };

    return (
      <div>
        <h1>Welcome to Check-in!</h1>
        <BrowserRouter>
           <Switch>
             <Route exact path="/" render={myNamePage}/>
             <Route exact path="/host" render={myHostPage} />
             <Route exact path="/guest" render={myGuestPage} />
           </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
