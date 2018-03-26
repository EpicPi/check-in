import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  checkSignupCode,
  createEvent,
  editEvent,
  getRsvps,
  replaceRsvps,
  replaceAllRsvps,
  removeGuest,
  changeGuest,
  addGuest
} from '../../../actions';
import { LOAD } from '../../../helpers/Enums';

class RsvpInput extends Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
    // this.props.getRsvps(this.props.event);
  }

  removeGuest(i, e) {
    this.props.removeGuest(i);
  }

  changeGuest(i, e) {
    this.props.changeGuest(i, e.target.value);
  }

  addGuest(e) {
    e.preventDefault();
    this.props.addGuest();
  }

  handleFile() {
    let props = this.props;
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let reader = new FileReader();
      reader.onloadend = function(evt) {
        // console.log(evt.target.result);
        props.replaceAllRsvps(props.event, evt.target.result.split(/\r?\n/));
      };
      reader.readAsText(document.querySelector('#files').files[0]);
    } else {
      alert('Please add RSVPs manually');
    }
  }

  render() {
    const guests = !this.props.rsvps
      ? ''
      : this.props.rsvps.map((guest, i) => (
          <div className="row" key={i}>
            <div className="col-md-6">
              <input
                type="text"
                value={guest}
                onChange={this.changeGuest.bind(this, i)}
              />
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={this.removeGuest.bind(this, i)}
              >
                <span aria-hidden="true" name={i}>
                  &times;
                </span>
              </button>
            </div>
          </div>
        ));

    return (
      <div className="row">
        <div className="col-md-12">
          <input type="file" id="files" onChange={this.handleFile} />
          <output id="output" />
          <div>
            RSVP List:
            {guests}
            <button className="btn btn-info" onClick={this.addGuest.bind(this)}>
              Add
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
    rsvps: state.event.guests
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getRsvps: getRsvps,
    replaceRsvps: replaceRsvps,
    replaceAllRsvps: replaceAllRsvps,
    removeGuest: removeGuest,
    changeGuest: changeGuest,
    addGuest: addGuest
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(RsvpInput);
