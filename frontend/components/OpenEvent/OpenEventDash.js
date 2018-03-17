import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hostGetEvents } from '../../actions';
import { connect } from 'react-redux';
import { openGetEvent } from '../../actions/openEventActions';

class OpenEventDash extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getEvent(this.props.match.params.id);
    }

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
        event: state.open.event
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvent: openGetEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenEventDash);
