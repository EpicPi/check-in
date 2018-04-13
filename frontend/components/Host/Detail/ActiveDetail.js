import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestItem from './GuestItem';
import { getAttends, getRsvps } from '../../../actions/index';
import { EVENT_TYPES, LOAD } from '../../../helpers/Enums';
import { openEventUrl } from '../../../assets/text';

class ActiveDetail extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.tick = this.tick.bind(this);
    this.getTypeSpecificOutput = this.getTypeSpecificOutput.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getNotSignedInOutput = this.getNotSignedInOutput.bind(this);
    //gotta make the call to load them
    this.props.getAttends(this.props.event);
    this.props.getRsvps(this.props.event);
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  tick() {
    this.props.getAttends(this.props.event);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  handleEditClick() {
    this.props.history.push('/host/edit');
  }

  getNotSignedInOutput() {
    switch (this.props.rsvps) {
      case LOAD.LOADING:
        return <h6>LOADING</h6>;
      case LOAD.NOTHING:
        return;
      default:
        const ids = this.props.attends.map(person => person._id);

        const ppl = this.props.rsvps.filter(person => {
          return !ids.includes(person._id);
        });
        if (ppl.length > 0)
          return (
            <div>
              <br />
              {ppl.map((guest, i) => (
                <div key={i}>
                  <GuestItem
                    history={this.props.history}
                    guest={guest}
                    manualCheckin={true}
                  />
                  <br />
                </div>
              ))}
            </div>
          );
        else
          return (
            <div>
              <br />
              Everyone Checked in!
            </div>
          );
    }
  }

  getTypeSpecificOutput() {
    switch (this.props.event.type) {
      case EVENT_TYPES.BASIC:
        return;
      case EVENT_TYPES.CODE:
        return (
          <div className="row">
            <label className="col-md-2 ">Checkin Code</label>
            <div className="col-md-9">
              <div>{this.props.event.checkinCode}</div>
            </div>
          </div>
        );
      case EVENT_TYPES.OPEN:
        return (
          <div>
            <div className="row">
              <label className="col-md-2 ">Checkin Code</label>
              <div className="col-md-9">
                <div>{this.props.event.checkinCode}</div>
              </div>
            </div>
            <div className="row">
              <label className="col-md-2 ">Checkin Url</label>
              <div className="col-md-9">
                <div className="fakeLink">
                  <a
                    href={openEventUrl + this.props.event.code}
                    target="_blank"
                  >
                    {openEventUrl + this.props.event.code}
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
    }
  }

  getMessage() {
    if (
      this.props.attends.constructor === Array &&
      this.props.rsvps.constructor === Array
    ) {
      const ids = this.props.rsvps.map(person => person._id);
      return (
        this.props.attends.length +
        ' out of ' +
        (this.props.rsvps.length +
          this.props.attends.filter(el => !ids.includes(el._id)).length) +
        ' people have signed in'
      );
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="text-left">{this.props.event.name}</h2>
            <br />
          </div>
        </div>
        {this.getTypeSpecificOutput()}
        {this.getMessage()}
        <p>The following have not signed in:</p>
        {this.getNotSignedInOutput()}
        <br />
        <div className="center-block text-center">
          <button
            style={{ marginRight: '5px' }}
            onClick={this.handleEditClick}
            className="btn btn-info"
          >
            Edit Event
          </button>
          <button
            style={{ marginLeft: '5px' }}
            onClick={() => this.props.history.push('/host/event/basic')}
            className="btn btn-info"
          >
            More Info
          </button>
        </div>
        <br />
        <br />
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

export default connect(mapStateToProps, mapDispatchToProps())(ActiveDetail);
