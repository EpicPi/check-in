import React, { Component } from 'react';
import Event from './Event';
import { connect } from 'react-redux';
import {getEvents} from "../../actions";


class ShowEvents extends Component {
    componentDidMount(){
        this.props.getEvents();
        console.log('mounted');
    }
    handleClick(){
        this.props.selectEvent(this.props.event);
        this.props.history.push('/event');
    }
    render() {
        const events = this.props.events.map((event, i) => (
            <div key={i}>
                <Event name={event.name} code={event.code}/>
            </div>
        ));

        return (
            <ul>
                {events}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       events : state.eve.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: getEvents,
    };
};

export default connect(mapStateToProps,mapDispatchToProps())(ShowEvents);

