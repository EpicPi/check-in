import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hostAddEvent } from "../../actions";
import TimePicker from './TimePicker';

const TODAY = new Date().toISOString().slice(0,10);

class HostCreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            code: '',
            rsvpStart: {
                time: '00:00',
                date: TODAY
            },
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleRsvpStartChange = this.handleRsvpStartChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInput(e) {
        this.setState({ eventName: e.target.value });
    }

    handleCodeInput(e) {
        this.setState({ code: e.target.value });
    }

    handleRsvpStartChange(time, date) {
        this.setState({
            rsvpStart: {
                time: time ? time : this.state.rsvpStart.time,
                date: date ? date : this.state.rsvpStart.date,
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = {
            name: this.state.eventName,
            code: this.state.code,
            rsvpStart: new Date(this.state.rsvpStart.date + ' ' + this.state.rsvpStart.time),
        };
        console.log("post", event);
        this.props.addEvent(event);
        this.setState({
            eventName: '',
            code: '',
            rsvpStart: {
                time: '00:00',
                date: TODAY,
            }
        });

        this.props.history.push('/host');
    }

    render() {
        return (
            <div className="host-create-event row">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Create Event</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={this.handleSubmit} id="create-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>
                                                Event Name:
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="eventName"
                                                        value={this.state.eventName}
                                                        onChange={this.handleNameInput}
                                                        required
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>
                                            Code:
                                            <div>
                                                <input
                                                    type="text"
                                                    name="code"
                                                    value={this.state.code}
                                                    onChange={this.handleCodeInput}
                                                    required
                                                />
                                            </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>
                                                RSVP Start:
                                            <div>
                                                <TimePicker
                                                    time={ this.state.rsvpStart.time }
                                                    date={ this.state.rsvpStart.date }
                                                    handleChange={ this.handleRsvpStartChange } />
                                            </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                value="Submit"
                                                className="btn btn-info">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        addEvent: hostAddEvent,
    };
};

export default connect(mapStateToProps,mapDispatchToProps())(HostCreateEvent);


