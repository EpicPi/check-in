import {Component} from "react";
import {guestCheckCheckIn, guestCheckIn, resetEvent} from "../../actions";
import {connect} from "react-redux";
import React from "react";
import {CHECK_CHECKIN, EVENT_TYPES as EVENT_TYPE} from "../../helpers/Enums";
import {TODAY} from "../../helpers/Time";

class GuestCheckIn extends Component {

    constructor(props) {
        super(props);
        this.getCheckCheckInOutput = this.getCheckCheckInOutput.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckInCodeInput = this.handleCheckInCodeInput.bind(this);
        this.getCheckinOutput = this.getCheckinOutput.bind(this);
        this.handleSubmit = this.handleCheckInCodeInput.bind(this);
        this.state = {
            eventName: '',
            code: '',
            checkInCode: '',

        };
    }

    getCheckinOutput() {
        switch (this.props.event.type) {
            case EVENT_TYPE.BASIC:
                return <button onClick={this.handleCheckIn}>Check In</button>;
            case EVENT_TYPE.CODE:
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
                                <button onClick={this.handleSubmit}>confirm</button>
                            </label>
                            {this.getCheckCheckInOutput()}
                        </div>
                    </div>
                );
        }
    }

    handleCheckInCodeInput(e) {
        this.setState({checkInCode: e.target.value});
    }

    handleSubmit(){
        console.log('abc');
        this.props.checkCode(this.props.event, this.state.checkInCode);
    }

    getCheckCheckInOutput() {
        switch (this.props.check) {
            case CHECK_CHECKIN.SUCCESS:
                alert('checked in');
                this.props.history.push('/guest');
                return;
            case CHECK_CHECKIN.FAIL:
                return <h3>Code was not valid</h3>;
            case CHECK_CHECKIN.CHECKING:
                return <h3>Checking</h3>;
            default:
                return;

        }
    }

    handleCheckIn() {
        this.props.checkIn();
    }

    render() {
        return (
            <div>
                {this.getCheckinOutput()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
        check: state.guest.check,
    };
};
const mapDispatchToProps = () => {
    return {
        resetEvent: resetEvent,
        checkIn: guestCheckIn,
        checkCode: guestCheckCheckIn
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestCheckIn);
