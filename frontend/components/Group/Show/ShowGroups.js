import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hostGetEvents } from '../../../actions/index';
import EventItem from './EventItem';
import { LOAD } from '../../../helpers/Enums';
import { isEventActive, isEventClosed } from '../../../helpers/Time';

class ShowGroups extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);

    if (this.props.events === LOAD.NOTHING) this.props.getEvents();
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
    this.props.history.push('/group/create');
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
    events: state.host.events
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvents: hostGetEvents
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowGroups);
