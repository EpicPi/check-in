import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  dateInputFormat,
  dateStringToDate,
  dateStringToHours,
  timeInputFormat
} from '../../helpers/Time';

// const TODAY = new Date().toISOString().slice(0,10);

class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.currentTime = this.currentTime.bind(this);
  }

  currentTime(event) {
    event.preventDefault();
    let now = new Date();
    let time = timeInputFormat(now);
    let date = dateInputFormat(now);
    this.props.handleChange(this.props.name, time, date);
  }

  handleTimeChange(event) {
    this.props.handleChange(this.props.name, event.target.value, null);
  }

  handleDateChange(event) {
    this.props.handleChange(this.props.name, null, event.target.value);
  }

  render() {
    return (
      <div className="row justify-content-start">
        <div className="col-auto">
          <input
            type="time"
            value={this.props.time}
            onChange={this.handleTimeChange}
            required
            className="form-control"
          />
        </div>
        <div className="col-auto">
          {/* TODO: put restrictions on imposible date */}
          <input
            type="date"
            value={this.props.date}
            onChange={this.handleDateChange}
            required
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary" onClick={this.currentTime}>
            Current Time
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(TimePicker);
