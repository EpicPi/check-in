import {Component} from "react";
import {guestGetEvents} from "../../actions";
import {connect} from "react-redux";
import React from "react";
import GuestEventItem from "./GuestEventItem";
import {LOAD} from "../../helpers";

class GuestShowEvents extends Component {
    constructor(props) {
        super(props);
        this.getEventsOutput = this.getEventsOutput.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    componentWillMount() {
        if (this.props.events === LOAD.NOTHING)
            this.props.getEvents();
    }
    handleJoin(){
        this.props.history.push('/guest/join');
    }

    getEventsOutput(){
        switch (this.props.events) {
            case LOAD.LOADING:
                return <h3>LOADING</h3>
            case LOAD.NOTHING:
                return;
            default:
                return this.props.events.map((event, i) => (
                    <GuestEventItem history={this.props.history} key={i} event={event}/>
                ));
        }
    }

    render() {
        return (
            <div className="row guest-show">
                <div className="container-fluid">
                    <div className="row btn-create">
                        <div className="col-md-12">
                            <button className="btn btn-lg" onClick={this.handleJoin}>Join
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="event-list">
                                {this.getEventsOutput()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.guest.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: guestGetEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestShowEvents);
