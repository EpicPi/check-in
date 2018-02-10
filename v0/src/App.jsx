import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuestDash from './Guest/GuestDash';
import HostDash from './Host/HostDash';
import Cookies from 'universal-cookie';

class App extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
  }

  render() {
      this.cookies.set('name', 'Bobby', { path: '/' });
    return (
      <div>
        <BrowserRouter>
          <div>
            HelloWorld!
            <Switch>
              <Route exact path="/host" component={HostDash} />
              <Route exact path="/guest" component={GuestDash} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
