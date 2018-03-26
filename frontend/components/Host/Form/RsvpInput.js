import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  checkSignupCode,
  createEvent,
  editEvent,
  getRsvps,
  replaceRsvps,
  resetSignupCode
} from '../../../actions';
import { LOAD } from '../../../helpers/Enums';

class RsvpInput extends Component {
  constructor(props) {
    super(props);
    this.getRSVPsOutput = this.getRSVPsOutput.bind(this);
    this.handleFile = this.handleFile.bind(this);

    this.state = {
      rsvps: ''
    };
  }

  getRSVPsOutput(props) {
    switch (props.rsvps) {
      case LOAD.LOADING:
        return <h6>LOADING</h6>;
      case LOAD.NOTHING:
        return;
      default:
        let items = props.rsvps.map((guest, i) => (
          <div key={i}>{guest.name}</div>
        ));
        return items;
    }
  }

  handleFile() {
    let props = this.props;
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let reader = new FileReader();
      reader.onloadend = function(evt) {
        // console.log(evt.target.result);
        props.replaceRsvps(props.event, evt.target.result);
      };
      reader.readAsText(document.querySelector('#files').files[0]);
    } else {
      alert('Please add RSVPs manually');
    }
  }

  render() {
    this.state.rsvps = this.getRSVPsOutput(this.props);
    return (
      <div className="row">
        <div className="col-md-12">
          <input
            type="file"
            id="files"
            name="files[]"
            onChange={this.handleFile}
          />
          <output id="output" />
          <div>
            RSVP List:
            {this.state.rsvps}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected,
    rsvps: state.event.selectedRsvps
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getRsvps: getRsvps,
    replaceRsvps: replaceRsvps
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(RsvpInput);
