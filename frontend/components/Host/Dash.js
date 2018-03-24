import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateEvent from './Form/CreateEvent';
import ShowEvents from './Show/ShowEvents';
import EventDetail from './Show/EventDetail';
import EditEvent from './Form/EditEvent';
import { connect } from 'react-redux';

class HostDash extends Component {
  render() {
    return (
      <div className="container container-fluid">
        <Route exact path="/host" component={ShowEvents} />
        <Route exact path="/host/create" component={CreateEvent} />
        <Route exact path="/host/event" component={EventDetail} />
        <Route exact path="/host/edit" component={EditEvent} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(HostDash);
