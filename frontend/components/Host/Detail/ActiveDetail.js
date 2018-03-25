import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestItem from '../Show/GuestItem';
import { getAttends, getRsvps } from '../../../actions/index';
import { LOAD } from '../../../helpers/Enums';

class ActiveDetail extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.tick = this.tick.bind(this);

    //gotta make the call to load them
    this.props.getAttends(this.props.event);
    this.props.getRsvps(this.props.event);

    this.state = {
      notSignedIn: this.getNotSignedInOutput(this.props)
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 5000);
    this.setState({ timer });
  }

  tick() {
    this.props.getAttends(this.props.event);
  }

  componentWillUnmount() {
    console.log('component did unmount');
    clearInterval(this.state.timer);
  }
  componentWillReceiveProps(props) {
    this.setState({
      notSignedIn: this.getNotSignedInOutput(props)
    });
  }

  handleEditClick() {
    this.props.history.push('/host/edit');
  }

  getNotSignedInOutput(props) {
    switch (props.rsvps) {
      case LOAD.LOADING:
        return <h6>LOADING</h6>;
      case LOAD.NOTHING:
        return;
      default:
        const ppl = props.rsvps.filter(person => {
          console.log(props.attends);
          return !props.attends.includes(person);
        });
        if (ppl.length > 0)
          return (
            <div>
              <br />
              <p>The following have not signed in:</p>
              {ppl.map((guest, i) => (
                <GuestItem history={props.history} key={i} guest={guest} />
              ))}
            </div>
          );
        else
          return (
            <div>
              <br />
              everyone signed in!
            </div>
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
        {this.props.attends.length} out of {this.props.rsvps.length} people have
        signed in
        {this.state.notSignedIn}
        <br />
        <button onClick={this.handleEditClick} className="btn btn-info">
          Edit Event
        </button>
        <button
          onClick={() => this.props.history.push('/host/event/basic')}
          className="btn btn-info"
        >
          More Info
        </button>
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
