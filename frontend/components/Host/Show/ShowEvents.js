import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hostGetEvents } from '../../../actions/index';
import EventItem from './EventItem';
import { LOAD } from '../../../helpers/Enums';
import {
  dateStringToDate,
  dateStringToHours,
  dateTimeToDate,
  getCurrentDate,
  getCurrentTime
} from '../../../helpers/Time';

class ShowEvents extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.getEventsOutput = this.getEventsOutput.bind(this);

    if (this.props.events === LOAD.NOTHING) this.props.getEvents();
    this.state = {
      out: this.getEventsOutput(this.props),
      active: this.getActiveEventsOutput(this.props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      out: this.getEventsOutput(nextProps),
      active: this.getActiveEventsOutput(nextProps)
    });
  }

  handleCreate() {
    this.props.history.push('/host/create');
  }

  getEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        return props.events.map((event, i) => (
          <EventItem history={props.history} key={i} event={event} />
        ));
    }
  }

  getActiveEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        let now = new Date();
        let eve = props.events[0];
        console.log(eve.dates.checkinStart);
        console.log(new Date(eve.dates.checkinStart).toISOString());
        console.log(dateStringToDate(eve.dates.checkinStart));
        let e = dateTimeToDate(
          dateStringToDate(eve.dates.checkinStart),
          dateStringToHours(eve.dates.checkinStart)
        );
        console.log(now + e);
        return props.events
          .filter(
            event =>
              now < event.dates.checkinEnd && now > event.dates.checkinStart
          )
          .map((event, i) => (
            <EventItem history={props.history} key={i} event={event} />
          ));
    }
  }

  render() {
    return (
      <div className="row host-show">
        <div className="container-fluid">
          <div className="row btn-create">
            <div className="col-md-12">
              <button
                className="btn btn-lg btn-info"
                onClick={this.handleCreate}
              >
                create
              </button>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <ul className="event-list">{this.state.out}</ul>
            </div>
          </div>
          Active
          <div className="row">
            <div className="col-md-12">
              <ul className="event-list">{this.state.active}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.host.events
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvents: hostGetEvents
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowEvents);
