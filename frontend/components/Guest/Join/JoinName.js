import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinEvent, resetJoinFind } from '../../../actions/index';
import { confirmationPrompt } from '../../../assets/text';

class JoinName extends Component {
  constructor(props) {
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      name: ''
    };
  }

  handleConfirm(e) {
    e.preventDefault();
    this.props.joinEvent(this.props.eventToJoin, this.state.name);
    this.props.history.push('/guest');
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form className="form">
        <br />
        <div className="form-group row">
          <label className="col-md-12 col-form-label col-form-label-lg">
            {confirmationPrompt + this.props.eventToJoin.name}
          </label>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-form-label">Name:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <button
          className="form-group btn btn-success"
          type="submit"
          value="Submit"
          onClick={this.handleConfirm}
        >
          Confirm
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    eventToJoin: state.guest.eventToJoin
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    joinEvent: joinEvent,
    resetJoin: resetJoinFind
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(JoinName);
