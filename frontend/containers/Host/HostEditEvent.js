import React, {Component} from 'react';
import {connect} from 'react-redux';
import TimePicker from './TimePicker';
import {hostEditEvent} from "../../actions";
import { dateStringToHours, dateStringToDate, dateTimeToDate } from "../../helpers/Time"

class HostEditEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: this.props.event.name,
            code: this.props.event.code,
            rsvpStart: {
                time: dateStringToHours(this.props.event.dates.rsvpStart),
                date: dateStringToDate(this.props.event.dates.rsvpStart)
            },
            rsvpEnd: {
                time: dateStringToHours(this.props.event.dates.rsvpEnd),
                date: dateStringToDate(this.props.event.dates.rsvpEnd)
            },
            checkinStart: {
                time: dateStringToHours(this.props.event.dates.checkinStart),
                date: dateStringToDate(this.props.event.dates.checkinStart)
            },
            checkinEnd: {
                time: dateStringToHours(this.props.event.dates.checkinEnd),
                date: dateStringToDate(this.props.event.dates.checkinEnd)
            },

        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleRsvpStartChange = this.handleRsvpStartChange.bind(this);
        this.handleRsvpEndChange = this.handleRsvpEndChange.bind(this);
        this.handleCheckinStartChange = this.handleCheckinStartChange.bind(this);
        this.handleCheckinEndChange = this.handleCheckinEndChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInput(e) {
        this.setState({eventName: e.target.value});
    }

    handleCodeInput(e) {
        this.setState({code: e.target.value});
    }

    handleRsvpStartChange(time, date) {
        this.setState({
            rsvpStart: {
                time: time ? time : this.state.rsvpStart.time,
                date: date ? date : this.state.rsvpStart.date,
            }
        });
    }

    handleRsvpEndChange(time, date) {
        this.setState({
            rsvpEnd: {
                time: time ? time : this.state.rsvpEnd.time,
                date: date ? date : this.state.rsvpEnd.date,
            }
        });
    }

    handleCheckinStartChange(time, date) {
        this.setState({
            checkinStart: {
                time: time ? time : this.state.checkinStart.time,
                date: date ? date : this.state.checkinStart.date,
            }
        });
    }

    handleCheckinEndChange(time, date) {
        this.setState({
            checkinEnd: {
                time: time ? time : this.state.checkinEnd.time,
                date: date ? date : this.state.checkinEnd.date,
            }
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        const event = {
            ...this.props.event,
            name: this.state.eventName,
            code: this.state.code,
            dates: {
                rsvpStart: dateTimeToDate(this.state.rsvpStart.date, this.state.rsvpStart.time),
                rsvpEnd: dateTimeToDate(this.state.rsvpEnd.date, this.state.rsvpEnd.time),
                checkinStart: dateTimeToDate(this.state.checkinStart.date, this.state.checkinStart.time),
                checkinEnd: dateTimeToDate(this.state.checkinEnd.date, this.state.checkinEnd.time),
            }

        };
        this.props.editEvent(event);
        this.setState({
            eventName: '',
            code: '',
        });

        this.props.history.push('/host');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="create-form">
                    <div>
                        <label>
                            Event Name:
                            <input
                                type="text"
                                name="eventName"
                                value={this.state.eventName}
                                onChange={this.handleNameInput}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Code:
                            <input
                                type="text"
                                name="code"
                                value={this.state.code}
                                onChange={this.handleCodeInput}
                                required
                            />
                        </label>
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
                            <label>
                                RSVP End:
                                <div>
                                    <TimePicker
                                        time={ this.state.rsvpEnd.time }
                                        date={ this.state.rsvpEnd.date }
                                        handleChange={ this.handleRsvpEndChange } />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label>
                                Checkin Start:
                                <div>
                                    <TimePicker
                                        time={ this.state.checkinStart.time }
                                        date={ this.state.checkinStart.date }
                                        handleChange={ this.handleCheckinStartChange } />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label>
                                Checkin End:
                                <div>
                                    <TimePicker
                                        time={ this.state.checkinEnd.time }
                                        date={ this.state.checkinEnd.date }
                                        handleChange={ this.handleCheckinEndChange } />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            value="Submit"
                            className="btn btn-info">Submit
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        editEvent: hostEditEvent,
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(HostEditEvent);
