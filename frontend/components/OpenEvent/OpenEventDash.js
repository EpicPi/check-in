import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hostGetEvents } from '../../actions';
import { connect } from 'react-redux';
import { openGetEvent } from '../../actions/openEventActions';
import { LOAD } from '../../helpers/Enums';

class OpenEventDash extends Component {
    constructor(props) {
        super(props);

        this.getEventOutput = this.getEventOutput.bind(this);
        this.state = { out: this.getEventOutput(this.props) };
    }

    componentWillMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ out: this.getEventOutput(nextProps) });
    }

    getEventOutput(props) {
        switch (props.event) {
            case LOAD.LOADING:
                return <h3>LOADING</h3>;
            case LOAD.NOTHING:
                return (
                    <h3>
                        Event with ID {this.props.match.params.id} does not
                        exist!
                    </h3>
                );
            default:
                return <p>success</p>;
        }
    }

    render() {
        return (
            <div className="container-fluid container">
                <h2>Event Code: {this.props.match.params.id}</h2>
                <div>{this.state.out}</div>
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
