
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuestDash from './Guest/GuestDash';
import HostDash from './Host/HostDash';
import NameForm from './NameForm';
import Firebase from './Services/Firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
        };
        this.fb = new Firebase();

        this.handleNameInput = this.handleNameInput.bind(this);
    }


  handleNameInput(name) {
    let type = "host";
    let id = this.fb.login(name, type);
    this.setState({
      name: name,
      id: id,
    });
  }

  render() {
    const GuestPage = props => (
      <GuestDash name={this.state.name} {...props} />
    );

    const NamePage = props => (
      <NameForm handleName={this.handleNameInput} {...props} />
    );

    const HostPage = props => (
      <HostDash
        name={this.state.name}
        {...props}
      />
    );

    return (
      <div className="container container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Welcome to Check-in!</h1>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={NamePage} />
                <Route exact path="/host" render={HostPage} />
                <Route exact path="/guest" render={GuestPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
