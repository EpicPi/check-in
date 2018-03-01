import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getEvents, removeEvent, selectEvent} from "../../actions";
import Link from "react-router-dom/es/Link";
import EventItem from "./EventItem";


class ShowEvents extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.events.length === 0)
            this.props.getEvents();
        console.log('mounted');
    }


    render() {
        const events = this.props.events.map((event, i) => (
            <EventItem key={i} event={event}></EventItem>
        ));
        return (
            <div>
                <Link to={'/Host/create'}>create</Link>
                <ul>
                    {events}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.eve.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: getEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowEvents);

