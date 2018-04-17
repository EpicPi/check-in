import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DAYS } from '../../../helpers/Enums';
import { isEventRepeat } from '../../../helpers/Time';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.getRepeatsOutput = this.getRepeatsOutput.bind(this);
  }

  handleCheckIn() {
    this.props.history.push('/guest/checkin');
  }

  getRepeatsOutput() {
    if (!isEventRepeat(this.props.event)) {
      return;
    }
    const repeatOut = DAYS.map(day => {
      return (
        <div className="form-check form-check-inline" key={day}>
          <input
            className="form-check-input"
            type="checkbox"
            name={day}
            id={day}
            value={this.props.event.repeats[day]}
            checked={this.props.event.repeats[day]}
            style={{ width: '20px', height: '20px' }}
            readOnly={true}
          />
          <label className="form-check-label">
            {day.charAt(0).toUpperCase()}
          </label>
        </div>
      );
    });

    return (
      <div className="row">
        <label className="col-md-3">Repeats</label>
        <div className="col-md-9">{repeatOut}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Name</label>
            <label className="col-md-9 col-form-label">
              {this.props.event.name}
            </label>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Info</label>
            <label className="col-md-9 col-form-label">
              {this.props.event.info}
            </label>
          </div>
          {this.getRepeatsOutput()}
          <button className="btn btn-success" onClick={this.handleCheckIn}>
            Check In
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(EventDetail);
