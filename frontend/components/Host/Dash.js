import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateEvent from './Form/CreateEvent';
import ShowEvents from './Show/ShowEvents';
import BasicDetail from './Detail/BasicDetail';
import EditEvent from './Form/EditEvent';
import { connect } from 'react-redux';
import ActiveDetail from './Detail/ActiveDetail';
import ClosedDetail from './Detail/ClosedDetail';

class HostDash extends Component {
  render() {
    return (
      <div className="container container-fluid">
        <Route exact path="/host" component={ShowEvents} />
        <Route exact path="/host/create" component={CreateEvent} />
        <Route exact path="/host/event/basic" component={BasicDetail} />
        <Route exact path="/host/event/active" component={ActiveDetail} />
        <Route exact path="/host/event/closed" component={ClosedDetail} />
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
