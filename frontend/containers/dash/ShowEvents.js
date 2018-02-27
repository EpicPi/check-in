import React, {Component} from 'react';
import Event from './Event';
import {connect} from 'react-redux';
import {getEvents, selectEvent} from "../../actions";
import Link from "react-router-dom/es/Link";


class ShowEvents extends Component {
    componentDidMount() {
        this.props.getEvents();
        console.log('mounted');
    }

    handleClick(event) {
        this.props.selectEvent(event);
        console.log('the event is');
        console.log(event);
        this.props.history.push('/dash/event');
    }

    render() {
        const events = this.props.events.map((event, i) => (
            <div key={i}>
                <div>
                    Name: {event.name}
                </div>
                <button onClick={() => this.handleClick(event)}>more info</button>
            </div>
        ));
        return (
            <div>
                <Link to={'/dash/create'}>create</Link>
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
        selectEvent: selectEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowEvents);

