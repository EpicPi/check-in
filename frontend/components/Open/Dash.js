import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import {
  openGetEvent,
  openCheckin,
  openWalkin,
  resetCheckin,
  checkCheckinCode,
  getAttends,
  getOpenRsvpFull
} from '../../actions';
import { CHECK_CHECKIN, LOAD } from '../../helpers/Enums';
import { isEventActive } from '../../helpers/Time';
import {
  checkInCodeLabel,
  checkingCheckin,
  eventClosedError,
  eventNoExistError,
  invalidCodeError,
  noNameEnteredError,
  noNameSelectedError,
  submitButton,
  walkinPrompmt
} from '../../assets/text';

class Dash extends Component {
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
    this.getCheckinOutput = this.getCheckinOutput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      guest: null,
      checkinCode: ''
    };
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isAllowed() {
    if (!isEventActive(this.props.event)) {
      alert(eventClosedError);
      return false;
    }
    if (this.props.check !== CHECK_CHECKIN.SUCCESS) {
      alert(invalidCodeError);
      return false;
    }
    return true;
  }

  handleWalkin(e) {
    e.preventDefault();
    if (this.state.name === '') {
      alert(noNameEnteredError);
      return false;
    }
    if (!this.isAllowed()) {
      return;
    }
    this.props.walkin(this.props.event, this.state.name);
    alert('You have checked in!');
    this.props.history.push('/');
  }

  handleCheckin() {
    if (!this.state.guest) {
      alert(noNameSelectedError);
      return;
    }
    if (!this.isAllowed()) {
      return;
    }
    this.props.checkin(this.props.event, this.state.guest);
    alert('You have checked in!');
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
    if (this.props.rsvps.constructor === Array && this.props.rsvps)
      return this.props.rsvps.map(guest => (
        <option value={guest._id} key={guest._id}>
          {guest.name}
        </option>
      ));
  }

  getWalkinOutput() {
    return (
      <div>
        <h5>{walkinPrompmt}</h5>
        <form onSubmit={this.handleWalkin} id="open-checkin">
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Name</label>
            <div className="col-md-8">
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleGeneral}
                required
              />
              <br />
            </div>

            <div className="col-md-2">
              <button type="submit" value="Submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleChange(guest) {
    this.setState({ guest: guest });
  }

  getCheckinOutput() {
    return (
      <div className="form-group row">
        <label className="col-md-2 col-form-label">Name</label>
        <div className="col-md-8">
          <Select
            name="form-field-name"
            value={this.state.guest}
            onChange={this.handleChange}
            searchable={true}
            options={this.props.rsvps}
            valueKey={'_id'}
            labelKey={'name'}
            autoFocus
          />
          <br />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success" onClick={this.handleCheckin}>
            Submit
          </button>
        </div>
      </div>
    );
  }

  getCodeOutput() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-md-2 col-form-label">{checkInCodeLabel}</label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              name="code"
              // value={this.state.checkinCode}
              onChange={this.handleCheckInCodeInput}
              required
            />
          </div>
        </div>
      </form>
    );
  }

  getCheckinOutput() {
    return (
      <div className="form-group row">
        <label className="col-md-2 col-form-label">Name</label>
        <div className="col-md-4">
          <select
            onChange={this.handleGeneral}
            name="guest"
            className="form-control"
            value={this.state.guest}
          >
            <option value={'0'} key={1} />
            {this.getRsvpOutput()}
          </select>
        </div>
        <button className="btn btn-success" onClick={this.handleCheckin}>
          Submit
        </button>
      </div>
    );
  }

  getCodeOutput() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-md-2 col-form-label">{checkInCodeLabel}</label>
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="code"
              onChange={this.handleCheckInCodeInput}
              required
            />
          </div>
        </div>
      </form>
    );
  }

  render() {
    switch (this.props.event) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return <h3>{eventNoExistError}</h3>;
      default:
        return (
          <div className="container-fluid container">
            <h3 style={{ marginTop: '20px' }}>{this.props.event.name}</h3>
            <br />
            {this.getCodeOutput()}
            {this.getCheckinOutput()}
            <br />
            <br />
            {this.getWalkinOutput()}
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    rsvps: state.event.selectedRsvps,
    attends: state.event.attends,
    check: state.guest.checkCode
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvent: openGetEvent,
    getRsvps: getOpenRsvpFull,
    getAttends: getAttends,
    checkin: openCheckin,
    walkin: openWalkin,
    checkCode: checkCheckinCode,
    reset: resetCheckin
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dash);
