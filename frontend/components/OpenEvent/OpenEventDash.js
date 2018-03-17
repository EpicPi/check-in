import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hostGetEvents } from '../../actions';
import { connect } from 'react-redux';

class EventDash extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        return (
            <div className="container-fluid container">
                <h2>Event Code: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.event
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvent: getEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(EventDash);
