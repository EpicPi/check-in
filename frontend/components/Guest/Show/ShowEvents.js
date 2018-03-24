import { Component } from 'react';
import { guestGetEvents } from '../../../actions/index';
import { connect } from 'react-redux';
import React from 'react';
import GuestEventItem from './EventItem';
import { LOAD } from '../../../helpers/Enums';

class GuestShowEvents extends Component {
  constructor(props) {
    super(props);
    this.getEventsOutput = this.getEventsOutput.bind(this);
    this.handleJoin = this.handleJoin.bind(this);

    if (this.props.events === LOAD.NOTHING) this.props.getEvents();
    this.state = { out: this.getEventsOutput(this.props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ out: this.getEventsOutput(nextProps) });
  }

  handleJoin() {
    this.props.history.push('/guest/join');
  }

  getEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        return props.events.map((event, i) => (
          <GuestEventItem history={props.history} key={i} event={event} />
        ));
    }
  }

  render() {
    return (
      <div className="row guest-show">
        <div className="container-fluid">
          <div className="row btn-create">
            <div className="col-md-12">
              <button className="btn btn-lg btn-info" onClick={this.handleJoin}>
                Join
              </button>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <ul className="event-list">{this.state.out}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.guest.events
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvents: guestGetEvents
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestShowEvents);
