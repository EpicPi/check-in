import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostGetEvents, hostRemoveEvent, hostSelectEvent} from "../../actions";
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
            <EventItem history ={this.props.history} key={i} event={event}></EventItem>
        ));
        return (
            <div>
                <Link to={'/host/create'}>create</Link>
                <ul>
                    {events}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.host.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: hostGetEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowEvents);

