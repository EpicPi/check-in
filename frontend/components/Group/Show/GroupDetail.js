import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getGroupEvents } from '../../../actions/groupActions';
import { selectEvent } from '../../../actions';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>group detail</div>;
  }
}

const mapStateToProps = state => {
  return {
    group: state.group.selected,
    events: state.group.events
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvents: getGroupEvents,
    selectEvent: selectEvent
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupDetail);
