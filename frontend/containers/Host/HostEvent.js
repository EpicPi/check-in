import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostAddEvent, hostCheckCode, hostEditEvent} from "../../actions";
import TimePicker from './TimePicker';

import {CHECK_CODE, EVENT_TYPES} from "../../helpers/Enums";

import {TODAY, dateTimeToDate, dateStringToHours, dateStringToDate} from "../../helpers/Time";

class HostEvent extends Component {

    constructor(props) {
        super(props);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleRsvpStartChange = this.handleRsvpStartChange.bind(this);
        this.handleRsvpEndChange = this.handleRsvpEndChange.bind(this);
        this.handleCheckinStartChange = this.handleCheckinStartChange.bind(this);
        this.handleCheckinEndChange = this.handleCheckinEndChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getSelectOutput = this.getSelectOutput.bind(this);
        this.handleCheckInCodeInput = this.handleCheckInCodeInput.bind(this);
    }

    componentWillMount() {
        if (this.props.add)
            this.state = {
                eventName: '',
                code: '',
                codeOut: '',
                rsvpStart: {
                    time: '00:00',
                    date: TODAY
                },
                rsvpEnd: {
                    time: '00:00',
                    date: TODAY
                },
                checkinStart: {
                    time: '00:00',
                    date: TODAY
                },
                checkinEnd: {
                    time: '00:00',
                    date: TODAY
                },
                type: EVENT_TYPES.BASIC,
                checkInCode: '',

            };
        else
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
                type: this.props.event.type,
                checkInCode: this.props.event.checkInCode,
            };
    }

    handleNameInput(e) {
        this.setState({eventName: e.target.value});
    }

    handleCodeInput(e) {
        this.setState({code: e.target.value});
        if (this.state.code !== this.props.event.code) // if editing and you dont change
            this.props.hostCheckCode(e.target.value);
    }

    checkCodeOutput() {
        if (this.state.code === this.props.event.code) // if editing and you dont change
            return;
        switch (this.props.checkCode) {
            case CHECK_CODE.NOTHING_TO_CHECK:
                return '';
            case CHECK_CODE.TAKEN:
                return <h3>sorry code is taken</h3>;
            case CHECK_CODE.AVAILABLE:
                return <h3>Code is avaliable</h3>;
            case CHECK_CODE.CHECKING:
                return <h3>checking</h3>;
        }
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

    handleSelectChange(e) {
        this.setState({type: e.target.value});
    }

    handleCheckInCodeInput(e) {
        this.setState({checkInCode: e.target.value});
    }

    getSelectOutput() {
        switch (this.state.type) {
            case EVENT_TYPES.BASIC:
                return;
            case EVENT_TYPES.CODE:
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <label>
                                Check In Code:
                                <div>
                                    <input
                                        type="text"
                                        name="code"
                                        value={this.state.checkInCode}
                                        onChange={this.handleCheckInCodeInput}
                                        required
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.checkCode !== CHECK_CODE.AVAILABLE && this.state.code !== this.props.event.code) {
            alert('Please enter a different code');
            return;
        }

        const event = {
            ...this.props.event,
            name: this.state.eventName,
            code: this.state.code,
            dates: {
                rsvpStart: dateTimeToDate(this.state.rsvpStart.date, this.state.rsvpStart.time),
                rsvpEnd: dateTimeToDate(this.state.rsvpEnd.date, this.state.rsvpEnd.time),
                checkinStart: dateTimeToDate(this.state.checkinStart.date, this.state.checkinStart.time),
                checkinEnd: dateTimeToDate(this.state.checkinEnd.date, this.state.checkinEnd.time),
            },
            type: this.state.type,
            checkInCode: this.state.checkInCode,
        };
        if (this.props.add)
            this.props.addEvent(event);
        else
            this.props.editEvent(event);

        this.setState({
            eventName: '',
            code: '',
            rsvpStart: {
                time: '00:00',
                date: TODAY,
            },
            rsvpEnd: {
                time: '00:00',
                date: TODAY
            },
            checkinStart: {
                time: '00:00',
                date: TODAY
            },
            checkinEnd: {
                time: '00:00',
                date: TODAY
            },
            type: EVENT_TYPES.BASIC,
            checkInCode: '',
        });

        this.props.history.push('/host');
    }


    render() {
        return (
            <div className="host-create-event row">
                <div className="container-fluid">
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

                                {this.checkCodeOutput()}

                                <div className="row">
                                    <div className="col-md-12">
                                        <label>
                                            RSVP Start:
                                            <div>
                                                <TimePicker
                                                    time={this.state.rsvpStart.time}
                                                    date={this.state.rsvpStart.date}
                                                    handleChange={this.handleRsvpStartChange}/>
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
                                                    time={this.state.rsvpEnd.time}
                                                    date={this.state.rsvpEnd.date}
                                                    handleChange={this.handleRsvpEndChange}/>
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
                                                    time={this.state.checkinStart.time}
                                                    date={this.state.checkinStart.date}
                                                    handleChange={this.handleCheckinStartChange}/>
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
                                                    time={this.state.checkinEnd.time}
                                                    date={this.state.checkinEnd.date}
                                                    handleChange={this.handleCheckinEndChange}/>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        Check-in type
                                        <select value={this.state.type} onChange={this.handleSelectChange}>
                                            <option value={EVENT_TYPES.BASIC}>Basic</option>
                                            <option value={EVENT_TYPES.CODE}>Code</option>
                                        </select>
                                    </div>
                                </div>

                                {this.getSelectOutput()}

                                <div className="row">
                                    <div className="col-md-12">
                                        <button
                                            type="submit"
                                            value="Submit"
                                            className="btn btn-info">Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
        checkCode: state.host.checkCode
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        addEvent: hostAddEvent,
        hostCheckCode: hostCheckCode,
        editEvent: hostEditEvent,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(HostEvent);
