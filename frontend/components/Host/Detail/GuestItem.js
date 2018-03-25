import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';

class GuestItem extends Component {
  constructor(props) {
    super(props);
    this.getManualCheckinOutput = this.getManualCheckinOutput.bind(this);
  }
  manualCheckIn() {}
  getManualCheckinOutput() {
    if (this.props.manualCheckin) {
      return (
        <div className="col-md-5">
          <button onClick={this.manualCheckIn}>manual check In</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">Name</div>
        <div className="col-md-5">{this.props.guest.name}</div>
        {this.getManualCheckinOutput()}
        <br />
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
export default connect(mapStateToProps, mapDispatchToProps())(GuestItem);
