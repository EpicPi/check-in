import React, {Component} from 'react';
import Event from './EventDetail';
import {connect} from 'react-redux';
import {getEvents, removeEvent, selectEvent} from "../../actions";
import Link from "react-router-dom/es/Link";


class ShowEvents extends Component {
    componentDidMount() {
        if(this.props.events.length==0)
        this.props.getEvents();
        console.log('mounted');
    }

    handleClick(event) {
        this.props.selectEvent(event);
        this.props.history.push('/dash/event');
    }
    handleRemove(event){
        this.props.removeEvent(event);
    }

    render() {
        const events = this.props.events.map((event, i) => (
            <div key={i}>
                <div>
                    Name: {event.name}
                </div>
                <button onClick={() => this.handleClick(event)}>more info</button>
                <button onClick={()=>this.handleRemove(event)}>Remove</button>
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
        selectEvent: selectEvent,
        removeEvent: removeEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShowEvents);

