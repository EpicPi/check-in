import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class EventDash extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        return (
            <div>
                <h2>Event ID: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default EventDash;
