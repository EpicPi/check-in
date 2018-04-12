import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getGroupEvents } from '../../../actions/groupActions';
import { selectEvent } from '../../../actions';
import { LOAD } from '../../../helpers/Enums';
import { isEventActive, isEventClosed } from '../../../helpers/Time';
import EventItem from '../../Host/Show/EventItem';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    if (props.events === LOAD.NOTHING) props.getEvents(props.group);
    this.state = {
      out: this.getEventsOutput(this.props),
      active: this.getActiveEventsOutput(this.props),
      closed: this.getClosedEventsOutput(this.props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      out: this.getEventsOutput(nextProps),
      active: this.getActiveEventsOutput(nextProps),
      closed: this.getClosedEventsOutput(nextProps)
    });
  }

  handleCreate() {
    this.props.history.push('/host/create');
  }

  handleEdit() {
    this.props.history.push('/group/edit');
  }

  getEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        if (
          props.events.filter(
            event => !isEventActive(event) && !isEventClosed(event)
          ).length > 0
        )
          return (
            <div>
              <h3>Open</h3>
              <div className="row">
                <div className="col-md-12">
                  <ul className="event-list">
                    {props.events
                      .filter(
                        event => !isEventActive(event) && !isEventClosed(event)
                      )
                      .map((event, i) => (
                        <EventItem
                          history={props.history}
                          key={i}
                          event={event}
                          group={props.group._id}
                        />
                      ))}
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          );
    }
  }

  getActiveEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        if (props.events.filter(event => isEventActive(event)).length > 0)
          return (
            <div>
              <h3>CheckIn Active</h3>
              <div className="row">
                <div className="col-md-12">
                  <ul className="event-list">
                    {props.events
                      .filter(event => isEventActive(event))
                      .map((event, i) => (
                        <EventItem
                          history={props.history}
                          key={i}
                          event={event}
                          group={props.group._id}
                        />
                      ))}
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          );
    }
  }

  getClosedEventsOutput(props) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        if (props.events.filter(event => isEventClosed(event)).length > 0)
          return (
            <div>
              <h3>Closed</h3>
              <div className="row">
                <div className="col-md-12">
                  <ul className="event-list">
                    {props.events
                      .filter(event => isEventClosed(event))
                      .map((event, i) => (
                        <EventItem
                          history={props.history}
                          key={i}
                          event={event}
                          group={props.group._id}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          );
    }
  }

  render() {
    return (
      <div className="row host-show">
        <div className="container-fluid">
          <div className="row btn-create">
            <div className="col-md-12">
              <button
                className="btn btn-lg btn-info buttonLeft"
                onClick={this.handleCreate}
              >
                New Event
              </button>
              <button
                className="btn btn-lg btn-info buttonRight"
                onClick={this.handleEdit}
              >
                Edit Group
              </button>
            </div>
          </div>
          <hr />
          {this.state.active}
          {this.state.out}
          {this.state.closed}
        </div>
      </div>
    );
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
    selectEvent: selectEvent,
    getEvents: getGroupEvents
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupDetail);
