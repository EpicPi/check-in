import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenForm from './OpenForm';
import CodeForm from './CodeForm';
import {
  createEvent,
  checkSignupCode,
  editEvent,
  resetSignupCode
} from '../../../actions/';
import TimePicker from '../../../helpers/TimePicker';

import { CHECK_CODE, EVENT_TYPES } from '../../../helpers/Enums';

import {
  dateTimeToDateString,
  dateStringToHours,
  dateStringToDate,
  getCurrentDate,
  dateToString,
  dateTimeToDate
} from '../../../helpers/Time';

const initialState = {
  eventName: '',
  code: '',
  info: '',
  rsvpStart: {
    time: '00:00',
    date: getCurrentDate()
  },
  rsvpEnd: {
    time: '00:00',
    date: getCurrentDate()
  },
  checkinStart: {
    time: '00:00',
    date: getCurrentDate()
  },
  checkinEnd: {
    time: '00:00',
    date: getCurrentDate()
  },
  type: EVENT_TYPES.BASIC,
  checkinCode: ''
};

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.getEventTypeOutput = this.getEventTypeOutput.bind(this);

    if (this.props.add) {
      this.state = initialState;
      this.props.clearGuests();
    } else {
      this.state = {
        eventName: this.props.event.name,
        code: this.props.event.code,
        info: this.props.event.info,
        rsvpStart: {
          time: dateStringToHours(this.props.event.dates.rsvpStart),
          date: dateStringToDate(this.props.event.dates.rsvpStart)
        },
        rsvpEnd: {
          time: dateStringToHours(this.props.event.dates.rsvpEnd),
          date: dateStringToDate(this.props.event.dates.rsvpEnd)
        },
        checkinStart: {
          time: dateStringToHours(this.props.event.dates.checkinStart),
          date: dateStringToDate(this.props.event.dates.checkinStart)
        },
        checkinEnd: {
          time: dateStringToHours(this.props.event.dates.checkinEnd),
          date: dateStringToDate(this.props.event.dates.checkinEnd)
        },
        type: this.props.event.type,
        checkinCode: this.props.event.checkinCode
      };
    }
  }

  componentWillUpdate(props, state) {
    // if editing and you changed from initial or if you are creating
    if (state.code !== props.event.code && state.code !== this.state.code)
      props.hostCheckCode(state.code);
  }

  handleGeneral(e) {
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleUpperCase(e) {
    let value = e.target.value.toUpperCase();
    this.setState({ [e.target.name]: value });
  }

  handleTimeChange(name, time, date) {
    this.setState({
      [name]: {
        time: time ? time : this.state[name].time,
        date: date ? date : this.state[name].date
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      this.props.checkCode !== CHECK_CODE.AVAILABLE &&
      this.state.code !== this.props.event.code
    ) {
      alert('Please enter a different code');
      return;
    }
    const rsvpEnd = dateTimeToDate(
      this.state.rsvpEnd.date,
      this.state.rsvpEnd.time
    );
    const rsvpStart = dateTimeToDate(
      this.state.rsvpStart.date,
      this.state.rsvpStart.time
    );
    const checkinStart = dateTimeToDate(
      this.state.checkinStart.date,
      this.state.checkinStart.time
    );
    const checkinEnd = dateTimeToDate(
      this.state.checkinEnd.date,
      this.state.checkinEnd.time
    );

    if (rsvpEnd < rsvpStart) {
      alert(
        'Please make sure your rsvp end time is after your rsvp start time'
      );
      return;
    }
    if (checkinEnd < checkinStart) {
      alert(
        'Please make sure your checkin end time is after your checkin start time'
      );
      return;
    }
    if (checkinStart < rsvpStart) {
      alert(
        'Please make sure your checkin start time is after your rsvp start time'
      );
      return;
    }

    const event = {
      ...this.props.event,
      name: this.state.eventName,
      code: this.state.code,
      dates: {
        rsvpStart: dateToString(rsvpStart),
        rsvpEnd: dateToString(rsvpEnd),
        checkinStart: dateToString(checkinStart),
        checkinEnd: dateToString(checkinEnd)
      },
      type: this.state.type,
      checkinCode: this.state.checkinCode,
      info: this.state.info
    };

    if (this.props.add) this.props.addEvent(event);
    else this.props.editEvent(event);

    // if type open, replace RSVP list
    if (this.state.type === EVENT_TYPES.OPEN) {
      this.props.updateRsvps(this.props.event, this.props.guests);
    }

    // this.setState(initialState);

    this.props.history.push('/host');
  }

  getCheckCodeOutput() {
    if (this.state.code === this.props.event.code)
      // if editing and you dont change
      return;
    switch (this.props.checkCode) {
      case CHECK_CODE.NOTHING_TO_CHECK:
        return '';
      case CHECK_CODE.TAKEN:
        return <h3>sorry code is taken</h3>;
      case CHECK_CODE.AVAILABLE:
        return <h3>Code is avaliable</h3>;
      case CHECK_CODE.CHECKING:
        return <h3>checking</h3>;
    }
  }

  getEventTypeOutput() {
    switch (this.state.type) {
      case EVENT_TYPES.BASIC:
        return;
      case EVENT_TYPES.CODE:
        return (
          <CodeForm
            handleInput={this.handleUpperCase}
            checkinCode={this.state.checkinCode}
          />
        );
      case EVENT_TYPES.OPEN:
        return <OpenForm guests={this.state.rsvps} />;
    }
  }

  render() {
    return (
      <div className="host-create-event row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form
                onSubmit={this.handleSubmit}
                id="create-form"
                className="form"
              >
                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Event Name</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="eventName"
                      value={this.state.eventName}
                      onChange={this.handleGeneral}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Code</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="code"
                      value={this.state.code}
                      onChange={this.handleUpperCase}
                      required
                      className="form-control"
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                  </div>
                </div>

                {this.getCheckCodeOutput()}

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Other info</label>
                  <div className="col-md-9">
                    <textarea
                      name="info"
                      value={this.state.info}
                      onChange={this.handleGeneral}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">RSVP Start</label>
                  <div className="col-md-9">
                    <TimePicker
                      name="rsvpStart"
                      time={this.state.rsvpStart.time}
                      date={this.state.rsvpStart.date}
                      handleChange={this.handleTimeChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">RSVP End</label>
                  <div className="col-md-9">
                    <TimePicker
                      name="rsvpEnd"
                      time={this.state.rsvpEnd.time}
                      date={this.state.rsvpEnd.date}
                      handleChange={this.handleTimeChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">
                    Checkin Start
                  </label>
                  <div className="col-md-9">
                    <TimePicker
                      name="checkinStart"
                      time={this.state.checkinStart.time}
                      date={this.state.checkinStart.date}
                      handleChange={this.handleTimeChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Checkin End</label>
                  <div className="col-md-9">
                    <TimePicker
                      name="checkinEnd"
                      time={this.state.checkinEnd.time}
                      date={this.state.checkinEnd.date}
                      handleChange={this.handleTimeChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-2 col-form-label">
                    Check-in Type
                  </label>
                  <div className="col-md-3">
                    <select
                      value={this.state.type}
                      onChange={this.handleGeneral}
                      name="type"
                      className="form-control"
                    >
                      <option value={EVENT_TYPES.BASIC}>Basic</option>
                      <option value={EVENT_TYPES.CODE}>Code</option>
                      <option value={EVENT_TYPES.OPEN}>Open Event</option>
                    </select>
                  </div>
                </div>

                {this.getEventTypeOutput()}

                <br />
                <br />
                <div className="center-block text-center">
                  <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary p"
                    style={{ marginRight: '5px' }}
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.history.push('/host')}
                    style={{ marginLeft: '5px' }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    checkCode: state.host.checkCode
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addEvent: createEvent,
    hostCheckCode: checkSignupCode,
    editEvent: editEvent,
    resetEvent: resetSignupCode
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(EventForm);
