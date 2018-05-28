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

  getGeneralOutput(props, header, filter) {
    switch (props.events) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return;
      default:
        let filteredEvents = props.events.filter(filter);
        if (filteredEvents.length > 0) {
          return (
            <div>
              <h3>{header}</h3>
              <div className="row">
                <div className="col-md-12">
                  <ul className="event-list">
                    {filteredEvents.map((event, i) => (
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
  }

  getEventsOutput(props) {
    return this.getGeneralOutput(props, 'Open', function(event) {
      return !isEventActive(event) && !isEventClosed(event);
    });
  }

  getActiveEventsOutput(props) {
    return this.getGeneralOutput(props, 'CheckIn Active', function(event) {
      return isEventActive(event);
    });
  }

  getClosedEventsOutput(props) {
    return this.getGeneralOutput(props, 'Closed', function(event) {
      return isEventClosed(event);
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="text-left">{this.props.group.name}</h2>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">Join Code</label>
          <div className="col-md-9">
            <div>{this.props.group.code}</div>
          </div>
        </div>
        <div className="row host-show">
          <div className="container-fluid">
            <div className="row btn-create">
              <div className="col-md-6 text-center">
                <button
                  className="btn btn-lg btn-info buttonLeft"
                  onClick={this.handleCreate}
                >
                  Create Event
                </button>
              </div>
              <div className="col-md-6 text-center">
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
