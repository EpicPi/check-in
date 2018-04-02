import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Dash extends Component {
  render() {
    return (
      <div>
        <Route exact path="/group" component={ShowEvents} />
        <Route exact path="/group/join" component={JoinEvent} />
        <Route exact path="/group/event" component={EventDetail} />
        <Route exact path="/group/checkin" component={CheckIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps())(Dash);
