import { Component } from 'react';
import { hostRemoveEvent, selectEvent } from '../../../actions/index';
import { connect } from 'react-redux';
import React from 'react';
import { isEventActive, isEventClosed } from '../../../helpers/Time';
import { EVENT_TYPES } from '../../../helpers/Enums';

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.getOpenEventOutput = this.getOpenEventOutput.bind(this);
  }

  handleClick() {
    this.props.selectEvent(this.props.event);
    if (isEventActive(this.props.event))
      this.props.history.push('/host/event/active');
    else if (isEventClosed(this.props.event))
      this.props.history.push('/host/event/closed');
    else this.props.history.push('/host/event/basic');
  }

  handleRemove() {
    this.props.removeEvent(this.props.event);
  }

  getOpenEventOutput() {
    if (this.props.event.type === EVENT_TYPES.OPEN)
      return (
        <div className="row">
          <div className="col-md-12">
            <span className="fakeLink">
              {'http://eventensure.com/event/' + this.props.event.code}
            </span>
          </div>
        </div>
      );
  }

  render() {
    return (
      <div className="host-event list-group-item bg-light text-dark">
        <div className="row">
          <div className="col-md-12">
            <span>Name: {this.props.event.name}</span>
            <span style={{ float: 'right' }}>
              <button
                onClick={this.handleClick}
                className="btn btn-success btn-event"
              >
                More Info
              </button>
              <button
                onClick={this.handleRemove}
                className="btn btn-danger btn-event"
              >
                Remove
              </button>
            </span>
          </div>
        </div>
        {this.getOpenEventOutput()}
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
