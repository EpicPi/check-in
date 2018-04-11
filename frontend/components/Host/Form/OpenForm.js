import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOpenRsvp, getOpenRsvpFull, updateOpenRsvp } from '../../../actions';
import parse from 'csv-parse/lib/sync';
import { LOAD } from '../../../helpers/Enums';
import { openEventUrl } from '../../../assets/text';

class OpenForm extends Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
    this.getGuestsOutput = this.getGuestsOutput.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.addGuestsFromFile = this.addGuestsFromFile.bind(this);
    this.deleteGuests = this.deleteGuests.bind(this);
    this.changeGuest = this.changeGuest.bind(this);
    this.getUrlOutPut = this.getUrlOutPut.bind(this);
    const that = this;
    this.reader = new FileReader();
    this.reader.onloadend = function(evt) {
      const input = evt.target.result;
      const records = parse(input);
      records.splice(0, 1);
      that.addGuestsFromFile(records);
    };
  }

  componentDidMount() {
    this.props.getOpenRsvp(this.props.event);
  }

  componentWillReceiveProps(next) {
    this.setState({ openRsvp: next.openRsvp });
  }

  removeGuest(i) {
    open = this.props.openRsvp.slice();
    open.splice(i, 1);
    this.props.updateOpenRsvp(open);
  }

  changeGuest(i, e, guest) {
    open = this.props.openRsvp.slice();
    // guest.name = e.target.value();
    console.log(this.props.openRsvp);
    open[i].name = e.target.value;
    this.props.updateOpenRsvp(open);
  }

  addGuest(e) {
    e.preventDefault();
    open = this.props.openRsvp.slice();
    open.push({ name: '' });
    this.props.updateOpenRsvp(open);
  }

  addGuestsFromFile(ppl) {
    open = this.props.openRsvp.slice();
    ppl.forEach(
      person =>
        person[1]
          ? open.push({ name: person[0] + ' ' + person[1] })
          : open.push({ name: person[0] })
    );
    this.props.updateOpenRsvp(open);
  }

  deleteGuests(e) {
    e.preventDefault();
    this.props.updateOpenRsvp([]);
  }

  handleFile(e) {
    const file = e.target.files[0];
    this.reader.readAsText(file);
  }

  getGuestsOutput() {
    switch (this.props.openRsvp) {
      case LOAD.LOADING:
        return 'LOADING';
      case LOAD.NOTHING:
        return;
      default:
        if (this.props.openRsvp.length === 0) return <br />;
        console.log(this.props.openRsvp);
        return (
          <div>
            <br />
            {this.props.openRsvp.map((guest, i) => (
              <div className="form-group row" key={i}>
                <div className="col-md-3">
                  <input
                    className="form-group"
                    type="text"
                    value={guest.name}
                    onChange={event => this.changeGuest(i, event, guest)}
                  />
                </div>
                <button
                  type="button"
                  className="close"
                  style={{ marginBottom: '15px', marginLeft: '5px' }}
                  onClick={event => this.removeGuest(i, event)}
                >
                  <span>&times;</span>
                </button>
              </div>
            ))}
          </div>
        );
    }
  }

  getUrlOutPut() {
    if (this.props.code) {
      return (
        <div>
          <br />
          Give the following checkin link to your guests:
          <br />
          <p className="fakeLink">{openEventUrl + this.props.code}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.getUrlOutPut()}
          <br />
          <input
            className="form-group"
            type="file"
            id="files"
            onChange={this.handleFile}
          />
          <div>
            <br />
            <div className="row">
              <div className="col-md-12">RSVP List:</div>
            </div>
            {this.getGuestsOutput()}
          </div>
          <div className="row">
            <div className="col-md-3">
              <button className="btn btn-info" onClick={this.addGuest}>
                Add
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger" onClick={this.deleteGuests}>
                Delete All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    openRsvp: state.event.selectedRsvps
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getOpenRsvp: getOpenRsvpFull,
    updateOpenRsvp: updateOpenRsvp
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenForm);
