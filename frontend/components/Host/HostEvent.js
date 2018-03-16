import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostAddEvent, hostCheckCode, hostEditEvent} from "../../actions/index";
import TimePicker from './TimePicker';

import {CHECK_CODE, EVENT_TYPES} from "../../helpers/Enums";

import {TODAY, dateTimeToDate, dateStringToHours, dateStringToDate} from "../../helpers/Time";
import {hostResetEvent} from "../../actions";

const initialState = {
    eventName: '',
    code: '',
    info: '',
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
    checkinCode: '',
};

class HostEvent extends Component {

    constructor(props) {
        super(props);
        this.handleGeneral = this.handleGeneral.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.getSelectOutput = this.getSelectOutput.bind(this);

        if (this.props.add)
            this.state = initialState;
        else
            this.state = {
                eventName: this.props.event.name,
                code: this.props.event.code,
                info: this.props.event.info,
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
                checkinCode: this.props.event.checkinCode,
            };
    }

    componentWillUpdate(props, state) {
        if (state.code !== props.event.code && state.code !== this.state.code) // if editing and you dont change
            props.hostCheckCode(state.code);
    }

    componentWillUnmount(){
        this.props.resetEvent();
    }

    handleGeneral(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleTimeChange(name, time, date) {
        this.setState({
            [name]: {
                time: time ? time : this.state[name].time,
                date: date ? date : this.state[name].date,
            }
        });
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
            checkinCode: this.state.checkinCode,
            info: this.state.info
        };

        if (this.props.add)
            this.props.addEvent(event);
        else
            this.props.editEvent(event);

        this.setState(initialState);

        this.props.history.push('/host');
    }

    getCheckCodeOutput() {
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
                                        name="checkinCode"
                                        value={this.state.checkinCode}
                                        onChange={this.handleGeneral}
                                        required
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                );
        }
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
                                                    onChange={this.handleGeneral}
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
                                                    onChange={this.handleGeneral}
                                                    required
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {this.getCheckCodeOutput()}

                                <div className="row">
                                    <div className="col-md-12">
                                        <label>
                                            Other info:
                                            <div>
                                                <textarea
                                                    name="info"
                                                    value={this.state.info}
                                                    onChange={this.handleGeneral}
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
                                                    name="rsvpStart"
                                                    time={this.state.rsvpStart.time}
                                                    date={this.state.rsvpStart.date}
                                                    handleChange={this.handleTimeChange}/>
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
                                                    name="rsvpEnd"
                                                    time={this.state.rsvpEnd.time}
                                                    date={this.state.rsvpEnd.date}
                                                    handleChange={this.handleTimeChange}/>
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
                                                    name="checkinStart"
                                                    time={this.state.checkinStart.time}
                                                    date={this.state.checkinStart.date}
                                                    handleChange={this.handleTimeChange}/>
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
                                                    name="checkinEnd"
                                                    time={this.state.checkinEnd.time}
                                                    date={this.state.checkinEnd.date}
                                                    handleChange={this.handleTimeChange}/>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        Check-in type
                                        <select
                                            value={this.state.type}
                                            onChange={this.handleGeneral}
                                            name="type">
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
        resetEvent: hostResetEvent
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(HostEvent);
