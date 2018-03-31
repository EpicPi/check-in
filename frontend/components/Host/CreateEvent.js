import React, { Component } from 'react';
import EventForm from './Form/EventForm';
import { resetEvent } from '../../actions';
import connect from 'react-redux/es/connect/connect';

class CreateEvent extends Component {
  componentWillMount() {
    this.props.resetEvent();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <h2 className="text-left">Create Event</h2>
            <br />
            <EventForm history={this.props.history} add={true} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = () => {
  return {
    resetEvent: resetEvent
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(CreateEvent);
