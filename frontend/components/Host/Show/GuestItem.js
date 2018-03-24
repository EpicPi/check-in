import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';

class GuestItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col-md-9">{this.props.guest.name}</div>
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
