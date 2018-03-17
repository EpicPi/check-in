import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hostGetEvents } from '../../actions';
import { connect } from 'react-redux';
import {
    openGetEvent,
    openCheckin,
    openJoinEvent
} from '../../actions/openEventActions';
import { LOAD } from '../../helpers/Enums';

class OpenEventDash extends Component {
    constructor(props) {
        super(props);
        if (this.props.event === LOAD.NOTHING)
            this.props.getEvent(this.props.match.params.id);
        this.getEventOutput = this.getEventOutput.bind(this);
        this.handleGeneral = this.handleGeneral.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            id: ''
        };
    }

    componentWillMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ out: this.getEventOutput(nextProps) });
    }

    handleGeneral(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.joinEvent(this.props.event.code, this.state.id);

        this.setState({ id: '' });
        this.props.history.push('/');
    }

    getEventOutput(props) {
        switch (props.event) {
            case LOAD.LOADING:
                return <h3>LOADING</h3>;
            case LOAD.NOTHING:
                return (
                    <h3>
                        Event with ID {props.match.params.id} does not exist!
                    </h3>
                );
            default:
                return (
                    <div>
                        <div>
                            <div>Event: {props.event.name}</div>
                            <div>Event Code: {props.event.code}</div>
                            <div>Info: {props.event.info}</div>
                        </div>
                        <form onSubmit={this.handleSubmit} id="open-checkin">
                            <label>
                                GTID:
                                <input
                                    type="text"
                                    name="id"
                                    value={this.state.id}
                                    onChange={this.handleGeneral}
                                    required
                                />
                            </label>
                            <button
                                type="submit"
                                value="Submit"
                                className="btn btn-success"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                );
        }
    }

    render() {
        const out = this.getEventOutput(this.props);
        return (
            <div className="container-fluid container">
                <div>{out}</div>
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
        getEvent: openGetEvent,
        joinEvent: openJoinEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(OpenEventDash);
