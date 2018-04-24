import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ShowEvents from './Show/ShowEvents';
import JoinEvent from './Join/JoinEvent';
import EventDetail from './Show/EventDetail';
import { connect } from 'react-redux';
import CheckIn from './Checkin/CheckIn';

class Dash extends Component {
  render() {
    return (
      <div>
        <Route exact path="/guest" component={ShowEvents} />
        <Route exact path="/guest/join" component={JoinEvent} />
        <Route exact path="/guest/event" component={EventDetail} />
        <Route exact path="/guest/checkin" component={CheckIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps())(Dash);
