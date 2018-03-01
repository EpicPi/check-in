import {Component} from "react";
import {guestGetEvents} from "../../actions";
import {connect} from "react-redux";
import React from "react";
import Link from "react-router-dom/es/Link";
import GuestEventItem from "./GuestEventItem";

class GuestShowEvents extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.events.length === 0)
            this.props.getEvents();
    }

    render() {
        const events = this.props.events.map((event, i) => (
            <GuestEventItem history={this.props.history} key={i} event={event}></GuestEventItem>
        ));
        return (
            <div>
                <Link to={'/guest/join'}>join</Link>
                <ul>
                    {events}
                </ul>
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
