import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestItem from './GuestItem';
import { getAttends, getRsvps } from '../../../actions/index';
import { LOAD } from '../../../helpers/Enums';

class BasicDetail extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);

    //gotta make the call to load them
    this.props.getAttends(this.props.event);
    this.props.getRsvps(this.props.event);

    this.state = {
      rsvps: this.getRSVPsOutput(this.props),
      attends: this.getAttendsOutput(this.props),
      uriRsvp: this.getUriRSVPOutput(this.props),
      uriAttend: this.getUriAttendsOutput(this.props)
    };
  }

  handleEditClick() {
    this.props.history.push('/host/edit');
  }

  componentWillReceiveProps(props) {
    this.setState({
      rsvps: this.getRSVPsOutput(props),
      attends: this.getAttendsOutput(props),
      uriRsvp: this.getUriRSVPOutput(props),
      uriAttend: this.getUriAttendsOutput(props)
    });
  }

  getUriRSVPOutput(props) {
    switch (props.rsvps) {
      case LOAD.LOADING:
        return;
      case LOAD.NOTHING:
        return;
      default:
        let csvContent = 'data:text/csv;charset=utf-8,';
        props.rsvps.forEach(el => {
          const row = el.name + ',' + el.extra;
          csvContent += row + '\r\n';
        });
        return csvContent;
    }
  }

  getUriAttendsOutput(props) {
    switch (props.attends) {
      case LOAD.LOADING:
        return;
      case LOAD.NOTHING:
        return;
      default:
        let csvContent = 'data:text/csv;charset=utf-8,';
        props.attends.forEach(el => {
          const row = el.name + ',' + el.extra;
          csvContent += row + '\r\n';
        });
        return csvContent;
    }
  }

  getRSVPsOutput(props) {
    switch (props.rsvps) {
      case LOAD.LOADING:
        return <h6>LOADING</h6>;
      case LOAD.NOTHING:
        return;
      default:
        return props.rsvps.map((guest, i) => (
          <GuestItem history={props.history} key={i} guest={guest} />
        ));
    }
  }

  getAttendsOutput(props) {
    switch (props.attends) {
      case LOAD.LOADING:
        return <h6>LOADING</h6>;
      case LOAD.NOTHING:
        return;
      default:
        return props.attends.map((guest, i) => (
          <GuestItem history={props.history} key={i} guest={guest} />
        ));
    }
  }

  render() {
    return (
      <div>
        Basic
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="text-left">{this.props.event.name}</h2>
            <br />
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">Code</label>
          <div className="col-md-9">
            <div>{this.props.event.code}</div>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">Info</label>
          <div className="col-md-9">
            <div>{this.props.event.info}</div>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">RSVP Start time</label>
          <div className="col-md-9">
            <div>
              {new Date(this.props.event.dates.rsvpStart).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">RSVP End time</label>
          <div className="col-md-9">
            <div>
              {new Date(this.props.event.dates.rsvpEnd).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">Checkin Start time</label>
          <div className="col-md-9">
            <div>
              {new Date(this.props.event.dates.checkinStart).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="row">
          <label className="col-md-2 ">Checkin End time</label>
          <div className="col-md-9">
            <div>
              {new Date(this.props.event.dates.checkinEnd).toLocaleString()}
            </div>
          </div>
        </div>
        <br />
        <button onClick={this.handleEditClick} className="btn btn-info">
          Edit Event
        </button>
        <div className="col-md-12">
          <hr />
        </div>
        <div className=" row">
          <h4 className="col-md-12 ">RSVPs</h4>
          <br />
          <div className="col-md-12">{this.state.rsvps}</div>

          <div className="col-md-6 text-left">
            <br />
            <button
              className="btn btn-secondary"
              href={this.state.uriRsvp}
              download={this.props.event.name + '_rsvps.csv'}
            >
              Download csv
            </button>
          </div>
        </div>
        <br />
        <div className=" row">
          <h4 className="col-md-12">Attendees</h4>
          <br />
          <div className="col-md-12">{this.state.attends}</div>

          <div className="col-md-6 text-left">
            <br />
            <button
              className="btn btn-secondary"
              href={this.state.uriAttend}
              download={this.props.event.name + '_attends.csv'}
            >
              download csv
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    rsvps: state.event.selectedRsvps,
    attends: state.event.selectedAttends
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getRsvps: getRsvps,
    getAttends: getAttends
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(BasicDetail);
