import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hostAddEvent } from "../../actions";
import TimePicker from './TimePicker';
import {CHECK_CODE} from "../../helpers";

const TODAY = new Date().toISOString().slice(0,10);

class HostCreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            code: '',
            codeOut:'',
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
        this.setState({ eventName: e.target.value });
    }

    handleCodeInput(e) {
        this.setState({ code: e.target.value });

    }
    handleCheckCode(){
        switch(this.props.checkCode){
            let out;
            case CHECK_CODE.NOTHING_TO_CHECK:
                out = '';
                break;
            case CHECK_CODE.TAKEN:
                out = <h3>sorry code is taken</h3>;
                break;
            case CHECK_CODE.AVALIABLE:
                out  = (
                <div>
                    <h3>Please confirm RSVP for {this.props.eventToJoin.name}</h3>
                    <button onClick={this.handleSubmit}>confirm</button>
                </div>);
                break;
            case CHECK_CODE.CHECKING:
                out = <h3>checking</h3>;
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




    handleSubmit(e) {
        e.preventDefault();
        const event = {
            name: this.state.eventName,
            code: this.state.code,
            dates: {
                rsvpStart: new Date(this.state.rsvpStart.date + ' ' + this.state.rsvpStart.time),
                rsvpEnd: new Date(this.state.rsvpEnd.date + ' ' + this.state.rsvpEnd.time),
                checkinStart: new Date(this.state.checkinStart.date + ' ' + this.state.checkinStart.time),
                checkinEnd: new Date(this.state.checkinEnd.date + ' ' + this.state.checkinEnd.time),
            }
        };
        console.log("post", event);
        this.props.addEvent(event);
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
                                    {}

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
        checkCode: state.host.checkCode
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        addEvent: hostAddEvent,
    };
};

export default connect(mapStateToProps,mapDispatchToProps())(HostCreateEvent);


