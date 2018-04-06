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

import { CHECK_CODE, EVENT_TYPES, LOAD } from '../../../helpers/Enums';

import {
  getCurrentDate,
  dateToString,
  dateTimeToDate,
  timeInputFormat,
  dateInputFormat
} from '../../../helpers/Time';
import {
  checkinEndTimeError,
  checkinOpenTimeError,
  codeTakenError,
  rsvpEndTimeError,
  codeAvailable,
  codeUnavaliableError
} from '../../../assets/text';
import { getGroups } from '../../../actions/groupActions';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpperCase = this.handleUpperCase.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.getEventTypeOutput = this.getEventTypeOutput.bind(this);
    this.getGroupOutput = this.getGroupOutput.bind(this);

    this.props.resetSignup();
    this.props.getGroups();

    if (this.props.add)
      this.state = {
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
        checkinCode: '',
        group: '',
        repeats: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false
        }
      };
    else
      this.state = {
        eventName: this.props.event.name,
        code: this.props.event.code,
        info: this.props.event.info,
        rsvpStart: {
          time: timeInputFormat(this.props.event.dates.rsvpStart),
          date: dateInputFormat(this.props.event.dates.rsvpStart)
        },
        rsvpEnd: {
          time: timeInputFormat(this.props.event.dates.rsvpEnd),
          date: dateInputFormat(this.props.event.dates.rsvpEnd)
        },
        checkinStart: {
          time: timeInputFormat(this.props.event.dates.checkinStart),
          date: dateInputFormat(this.props.event.dates.checkinStart)
        },
        checkinEnd: {
          time: timeInputFormat(this.props.event.dates.checkinEnd),
          date: dateInputFormat(this.props.event.dates.checkinEnd)
        },
        type: this.props.event.type,
        checkinCode: this.props.event.checkinCode,
        group: this.props.event.group,
        // TODO: clean this up
        repeats: this.props.event.repeats
      };
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

  handleCheckbox(e) {
    let temp = {
      ...this.state.repeats,
      [e.target.name]: !this.state.repeats[e.target.name]
    };
    this.setState({
      repeats: temp
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      this.props.checkCode !== CHECK_CODE.AVAILABLE &&
      this.state.code !== this.props.event.code
    ) {
      alert(codeTakenError);
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
      alert(rsvpEndTimeError);
      return;
    }
    if (checkinEnd < checkinStart) {
      alert(checkinEndTimeError);
      return;
    }
    if (checkinStart < rsvpStart) {
      alert(checkinOpenTimeError);
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
      info: this.state.info,
      openRsvp: this.props.openRsvp,
      group: this.state.group,
      repeats: this.state.repeats
    };

    if (this.props.add) this.props.addEvent(event);
    else this.props.editEvent(event);

    this.props.history.push('/host');
  }

  getCheckCodeOutput() {
    // if editing and you dont change code from the original
    if (this.state.code === this.props.event.code) return;
    switch (this.props.checkCode) {
      case CHECK_CODE.NOTHING:
        return;
      case CHECK_CODE.TAKEN:
        return <h3>{codeUnavaliableError}</h3>;
      case CHECK_CODE.AVAILABLE:
        return <h3>{codeAvailable}</h3>;
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
          <div>
            <CodeForm
              handleInput={this.handleUpperCase}
              checkinCode={this.state.checkinCode}
            />
          </div>
        );
      case EVENT_TYPES.OPEN:
        return (
          <div>
            <CodeForm
              handleInput={this.handleUpperCase}
              checkinCode={this.state.checkinCode}
            />
            <OpenForm code={this.state.code} />
            <br />
            <br />
          </div>
        );
    }
  }

  getGroupOutput() {
    switch (this.props.groups) {
      case LOAD.NOTHING:
        return;
      case LOAD.LOADING:
        return;
      default:
        return this.props.groups.map(group => (
          <option value={group._id} key={group._id}>
            {group.name}
          </option>
        ));
    }
  }

  render() {
    const days = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ];
    const repeatOut = days.map(day => {
      return (
        <div className="form-check form-check-inline" key={day}>
          <input
            defaultChecked={this.state.repeats[day]}
            className="form-check-input"
            type="checkbox"
            name={day}
            id={day}
            value={this.state.repeats[day]}
            onChange={this.handleCheckbox.bind(this)}
            style={{ width: '20px', height: '20px' }}
          />
          <label className="form-check-label">
            {day.charAt(0).toUpperCase()}
          </label>
        </div>
      );
    });
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
                  <label className="col-md-2 col-form-label">Group</label>
                  <div className="col-md-4">
                    <select
                      onChange={this.handleGeneral}
                      name="group"
                      className="form-control"
                      value={this.state.group}
                    >
                      <option value={''} key={1}>
                        None
                      </option>
                      {this.getGroupOutput()}
                    </select>
                  </div>
                </div>
                {this.state.group}
                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Repeat</label>
                  <div className="col-md-10">{repeatOut}</div>
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

                <div className="center-block text-center">
                  <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary buttonLeft"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-danger buttonRight"
                    onClick={() => this.props.history.push('/host')}
                  >
                    Cancel
                  </button>
                  <br />
                  <br />
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
    checkCode: state.host.checkCode,
    event: state.event.selected,
    openRsvp: state.event.selectedRsvps,
    groups: state.group.groups
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addEvent: createEvent,
    editEvent: editEvent,
    hostCheckCode: checkSignupCode,
    resetSignup: resetSignupCode,
    getGroups: getGroups
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(EventForm);
