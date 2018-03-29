import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEvent, joinEvent, resetJoinFind } from '../../../actions/index';
import { JOIN_FIND } from '../../../helpers/Enums';
import JoinBasic from './JoinBasic';
import {
  alreadyJoinedError,
  checkingCode,
  joinCodeLabel,
  joinFailError,
  submitButton
} from '../../../assets/text';

class JoinEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      out: this.getJoinFindOutput(this.props)
    };

    this.handleCodeInput = this.handleCodeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(next) {
    this.setState({ out: this.getJoinFindOutput(next) });
  }

  componentWillUnmount() {
    this.props.resetJoin();
  }

  handleCodeInput(e) {
    this.setState({ code: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findEvent(this.state.code);
  }

  getJoinFindOutput(props) {
    switch (props.joinFind) {
      case JOIN_FIND.FAIL:
        return <h3>{joinFailError}</h3>;
      case JOIN_FIND.SUCCESS:
        return <JoinBasic history={this.props.history} />;
      case JOIN_FIND.CHECKING:
        return <h3>{checkingCode}</h3>;
      case JOIN_FIND.ALREADY_JOINED:
        return <h3>{alreadyJoinedError}</h3>;
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="guest-join">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    {joinCodeLabel}
                  </label>
                  <div className="col-md-9">
                    <input
                      className="form-control"
                      type="text"
                      name="code"
                      value={this.state.code}
                      onChange={this.handleCodeInput}
                      required
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                  </div>
                </div>
                <button
                  className="form-group btn btn-success"
                  type="submit"
                  value="Submit"
                >
                  {submitButton}
                </button>
              </form>
              <div className="form-group row">
                <div className="col-md-12">{this.state.out}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    joinFind: state.guest.joinFind,
    eventToJoin: state.guest.eventToJoin
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    findEvent: findEvent,
    joinEvent: joinEvent,
    resetJoin: resetJoinFind
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(JoinEvent);
