import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    this.props.handleName(this.state.name);
  }

  enterGuest() {
    this.props.handleName(this.state.name);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="enter your name..."
              onChange={this.handleNameInput}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <Link to="/host">
              <button
                className="btn"
                onClick={this.enterHost}
                disabled={!this.state.name}
              >
                Host
              </button>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/guest">
              <button
                className="btn"
                onClick={this.enterGuest}
                disabled={!this.state.name}
              >
                Guest
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NameForm;
