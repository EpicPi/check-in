import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  replaceAllRsvps,
  removeGuest,
  changeGuest,
  addGuest,
  clearGuests
} from '../../../actions';

import { LOAD } from '../../../helpers/Enums';

class OpenForm extends Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
  }

  removeGuest(i) {
    this.props.removeGuest(i);
  }

  changeGuest(i, e) {
    this.props.changeGuest(i, e.target.value);
  }

  addGuest(e) {
    e.preventDefault();
    this.props.addGuest();
  }

  deleteGuests(e) {
    e.preventDefault();
    this.props.clearGuests();
  }

  handleFile() {
    let props = this.props;
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let file = document.querySelector('#files').files[0];
      let reader = new FileReader();
      reader.onloadend = function(evt) {
        // console.log(evt.target.result);
        props.replaceAllRsvps(props.event, evt.target.result.split(/\r?\n/));
      };
      reader.readAsText(file);
    } else {
      alert('Please add RSVPs manually');
    }
  }

  render() {
    const guests =
      this.props.guests === LOAD.NOTHING
        ? ''
        : this.props.guests.map((guest, i) => (
            <div className="form-group row" key={i}>
              <label className="col-md-2 col-form-label">Name</label>
              <div className="col-md-4">
                <input
                  className="form-group"
                  type="text"
                  value={guest}
                  onChange={this.changeGuest.bind(this, i)}
                />
              </div>
              <div className="col-md-1">
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
          <input
            className="form-group"
            type="file"
            id="files"
            onChange={this.handleFile}
          />
          <div>
            <div className="row">
              <div className="col-md-12">RSVP List:</div>
            </div>
            {guests}
          </div>
          <div className="row">
            <div className="col-md-3">
              <button
                className="btn btn-info"
                onClick={this.addGuest.bind(this)}
              >
                Add
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-danger"
                onClick={this.deleteGuests.bind(this)}
              >
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
    guests: state.event.guests
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    replaceAllRsvps: replaceAllRsvps,
    removeGuest: removeGuest,
    changeGuest: changeGuest,
    addGuest: addGuest,
    clearGuests: clearGuests
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenForm);