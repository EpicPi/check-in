import { Component } from 'react';
import { checkin } from '../../../actions/index';
import { connect } from 'react-redux';
import React from 'react';

class CheckinBasic extends Component {
  constructor(props) {
    super(props);
    this.handleCheckin = this.handleCheckin.bind(this);
  }

  handleCheckin() {
    this.props.checkin(this.props.event);
    this.props.history.push('/guest');
  }

  render() {
    return (
      <button className="btn btn-success" onClick={this.handleCheckin}>
        Confirm Check In
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected
  };
};

const mapDispatchToProps = () => {
  return {
    checkin: checkin
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckinBasic);
