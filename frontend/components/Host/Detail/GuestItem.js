import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { hostCheckIn } from '../../../actions';

class GuestItem extends Component {
  constructor(props) {
    super(props);
    this.getManualCheckinOutput = this.getManualCheckinOutput.bind(this);
    this.manualCheckIn = this.manualCheckIn.bind(this);
  }
  manualCheckIn() {
    this.props.checkin(this.props.event, this.props.guest);
  }
  getManualCheckinOutput() {
    if (this.props.manualCheckin) {
      return (
        <div className="col-md-5">
          <button className="btn" onClick={this.manualCheckIn}>
            manual check In
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">{this.props.guest.name}</div>
        {this.getManualCheckinOutput()}
        <br />
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
  return {
    checkin: hostCheckIn
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(GuestItem);
