import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  openGetEvent,
  openCheckin,
  openWalkin,
  getOpenRsvp,
  checkin,
  resetCheckin,
  checkCheckinCode
} from '../../actions';
import { CHECK_CHECKIN, EVENT_TYPES, LOAD } from '../../helpers/Enums';
import { isEventActive } from '../../helpers/Time';
import {
  checkedInMessage,
  checkInCodeLabel,
  checkingCheckin,
  confirmButton,
  invalidCodeError
} from '../../assets/text';

class OpenEventDash extends Component {
  constructor(props) {
    super(props);
    this.props.getEvent(this.props.match.params.id);
    this.getRsvpOutput = this.getRsvpOutput.bind(this);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleWalkin = this.handleWalkin.bind(this);
    this.handleCheckin = this.handleCheckin.bind(this);
    this.getWalkinOutput = this.getWalkinOutput.bind(this);
    this.getCheckCheckInOutput = this.getCheckCheckInOutput.bind(this);
    this.handleCheckInCodeInput = this.handleCheckInCodeInput.bind(this);
    this.getCodeOutput = this.getCodeOutput.bind(this);

    this.state = {
      name: '',
      guest: { name: '' },
      checkinCode: ''
    };
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleWalkin(e) {
    e.preventDefault();
    if (this.state.name === '') {
      alert('please write your name');
      return;
    }
    if (!isEventActive(this.props.event)) {
      alert('Sorry, this event is currently closed');
      return;
    }
    if (this.props.check !== CHECK_CHECKIN.SUCCESS) {
      alert('You have entered the incorrect check in code');
      return;
    }
    this.props.walkin(this.props.event, this.state.name);
    this.props.history.push('/');
  }

  handleCheckin() {
    if (this.state.guest.name === '') {
      alert('please choose a person');
      return;
    }
    if (!isEventActive(this.props.event)) {
      alert('Sorry, this event is currently closed');
      return;
    }
    if (this.props.check !== CHECK_CHECKIN.SUCCESS) {
      alert('You have entered the incorrect check in code');
      return;
    }
    this.props.checkin(this.props.event, this.state.guest);
    this.props.history.push('/');
  }

  handleCheckInCodeInput(e) {
    this.setState({ checkinCode: e.target.value });
    this.props.checkCode(this.props.event, e.target.value);
  }

  getCheckCheckInOutput() {
    switch (this.props.check) {
      case CHECK_CHECKIN.FAIL:
        return <h3>{invalidCodeError}</h3>;
      case CHECK_CHECKIN.CHECKING:
        return <h3>{checkingCheckin}</h3>;
      default:
        return;
    }
  }

  getRsvpOutput() {
    return this.props.rsvps.map(guest => (
      <option value={guest} key={guest._id}>
        {guest.name}
      </option>
    ));
  }

  getWalkinOutput() {
    return (
      <div>
        <h5>Don't see your name? </h5>
        <form onSubmit={this.handleWalkin} id="open-checkin">
          <label>
            <h6>Add yourself as a walkin: </h6>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleGeneral}
              required
            />
          </label>
          <br />
          <button type="submit" value="Submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }

  getCodeOutput() {
    return (
      <div className="container-fluid container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              {checkInCodeLabel}
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="code"
                value={this.state.checkinCode}
                onChange={this.handleCheckInCodeInput}
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    switch (this.props.event) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return <h3>Event with this url does not exist!</h3>;
      default:
        return (
          <div className="container-fluid container">
            <h3 style={{ marginTop: '20px' }}>{this.props.event.name}</h3>
            <br />
            {this.getCodeOutput()}
            <div className="form-group row">
              <label className="col-md-2 col-form-label">Name</label>
              <div className="col-md-3">
                <select
                  value={this.state.guest.name}
                  onChange={this.handleGeneral}
                  name="guest"
                  className="form-control"
                >
                  <option value={null} key={1} />
                  {this.getRsvpOutput()}
                </select>
              </div>
              <button className="btn btn-success" onClick={this.handleCheckin}>
                Submit
              </button>
            </div>
            {this.getWalkinOutput()}
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    rsvps: state.open.openRsvp,
    check: state.guest.checkCode
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvent: openGetEvent,
    getRsvps: getOpenRsvp,
    checkin: openCheckin,
    walkin: openWalkin,
    checkCode: checkCheckinCode,
    reset: resetCheckin
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenEventDash);
