import { Component } from 'react';
import { hostRemoveEvent, selectEvent } from '../../../actions/index';
import { connect } from 'react-redux';
import React from 'react';
import { isEVentActive, isEventClosed } from '../../../helpers/Time';

class EventItem extends Component {
  handleClick(event) {
    this.props.selectEvent(event);
    if (isEVentActive(event)) this.props.history.push('/host/event/active');
    else if (isEventClosed(event))
      this.props.history.push('/host/event/closed');
    else this.props.history.push('/host/event/basic');
  }

  handleRemove(event) {
    this.props.removeEvent(event);
  }

  render() {
    return (
      <div className="host-event list-group-item bg-light text-dark">
        <div className="row">
          <div className="col-md-12">
            <span>Name: {this.props.event.name}</span>
            <span style={{ float: 'right' }}>
              <button
                onClick={() => this.handleClick(this.props.event)}
                className="btn btn-success btn-event"
              >
                More Info
              </button>
              <button
                onClick={() => this.handleRemove(this.props.event)}
                className="btn btn-danger btn-event"
              >
                Remove
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    selectEvent: selectEvent,
    removeEvent: hostRemoveEvent
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(EventItem);
