import {Component} from "react";
import {guestCheckCheckin, guestCheckin} from "../../../actions/index";
import {connect} from "react-redux";
import React from "react";
import {CHECK_CHECKIN, EVENT_TYPES as EVENT_TYPE} from "../../../helpers/Enums";

class CheckinCode extends Component {

    constructor(props) {
        super(props);
        this.getCheckCheckInOutput = this.getCheckCheckInOutput.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckInCodeInput = this.handleCheckInCodeInput.bind(this);
        this.handleSubmit = this.handleCheckInCodeInput.bind(this);
        this.state = {
            eventName: '',
            code: '',
            checkinCode: '',

        };
    }

    handleCheckInCodeInput(e) {
        this.setState({checkinCode: e.target.value});
    }

    handleSubmit(){
        console.log('abc');
        this.props.checkCode(this.props.event, this.state.checkinCode);
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
        this.props.checkin();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <label>
                        Check In Code:
                        <div>
                            <input
                                type="text"
                                name="code"
                                value={this.state.checkinCode}
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

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
        check: state.guest.check,
    };
};
const mapDispatchToProps = () => {
    return {
        checkin: guestCheckin,
        checkCode: guestCheckCheckin
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckinCode);
