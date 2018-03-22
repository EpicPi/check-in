import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';

class HostEventItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col-md-9">{this.props.guest.name}</div>
        <div className="col-md-3">GT Username</div>
        <div className="col-md-9">{this.props.guest.extra}</div>
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
export default connect(mapStateToProps, mapDispatchToProps())(HostEventItem);
