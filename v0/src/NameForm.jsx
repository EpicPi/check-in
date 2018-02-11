import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.enterHost = this.enterHost.bind(this);
    this.enterGuest = this.enterGuest.bind(this);
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  enterHost() {
    this.props.handleName(this.state.name, 'host');
  }

  enterGuest() {
    this.props.handleName(this.state.name, 'guest');
  }


  render() {

    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="enter your name..."
          onChange={this.handleNameInput}
        />
        <div>
          <Link to="/host">
            <button onClick={this.enterHost} disabled={!this.state.name}>Host</button>
          </Link>
          <Link to="/guest">
            <button onClick={this.enterGuest} disabled={!this.state.name}>Guest</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NameForm;
