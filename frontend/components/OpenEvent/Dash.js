import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  openGetEvent,
  openCheckin,
  openWalkin,
  getOpenRsvp
} from '../../actions';
import { LOAD } from '../../helpers/Enums';

class OpenEventDash extends Component {
  constructor(props) {
    super(props);
    this.props.getEvent(this.props.match.params.id);
    this.getEventOutput = this.getEventOutput.bind(this);
    this.getRsvpOutput = this.getRsvpOutput.bind(this);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: ''
    };
  }

  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.walkin(this.props.event, this.state.name);
    this.props.history.push('/');
  }

  getRsvpOutput() {
    return <div>{/*{this.props.rsvps}*/}</div>;
  }

  getEventOutput() {
    switch (this.props.event) {
      case LOAD.LOADING:
        return <h3>LOADING</h3>;
      case LOAD.NOTHING:
        return <h3>Event with this url does not exist!</h3>;
      default:
        return (
          <div>
            <div>
              <div>Event: {this.props.event.name}</div>
              <div>Info: {this.props.event.info}</div>
            </div>
            <form onSubmit={this.handleSubmit} id="open-checkin">
              <label>
                Name:
                {this.getRsvpOutput()}
                <input
                  type="text"
                  name="name"
                  value={this.state.id}
                  onChange={this.handleGeneral}
                  required
                />
              </label>
              <button type="submit" value="Submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="container-fluid container">
        <div>{this.getEventOutput()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    rsvps: state.open.openRsvp
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvent: openGetEvent,
    getRsvps: getOpenRsvp,
    checkin: openCheckin,
    walkin: openWalkin
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenEventDash);
