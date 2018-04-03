import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowGroups from './Show/ShowGroups';

class Dash extends Component {
  render() {
    return (
      <div>
        <Route exact path="/group" component={ShowGroups} />
        <Route exact path="/group/join" component={JoinGroup} />
        <Route exact path="/group/event" component={GroupDetail} />
        <Route exact path="/group/create" component={CreateGroup} />
        <Route exact path="/group/edit" component={EditGroup} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps())(Dash);
