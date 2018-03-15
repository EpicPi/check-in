import {Component} from "react";
import {guestCheckCheckin, guestCheckin} from "../../../actions/index";
import {connect} from "react-redux";
import React from "react";
import {CHECK_CHECKIN, EVENT_TYPES as EVENT_TYPE} from "../../../helpers/Enums";
import {guestResetCheckin} from "../../../actions";

class CheckinCode extends Component {

    constructor(props) {
        super(props);
        this.getCheckCheckInOutput = this.getCheckCheckInOutput.bind(this);
        this.handleCheckInCodeInput = this.handleCheckInCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            checkinCode: '',

        };
    }

    componentDidUpdate(){
        if(this.props.check === CHECK_CHECKIN.SUCCESS){
            alert('checked in');
            this.props.history.push('/guest');
            this.props.checkin();
        }
    }

    componentWillUnmount(){
        this.props.reset();
    }

    handleCheckInCodeInput(e) {
        this.setState({checkinCode: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.checkCode(this.props.event, this.state.checkinCode);
    }

    getCheckCheckInOutput() {
        switch (this.props.check) {
            case CHECK_CHECKIN.FAIL:
                return <h3>Code was not valid</h3>;
            case CHECK_CHECKIN.CHECKING:
                return <h3>Checking</h3>;
            default:
                return;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
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
                            <button type="submit" value="submit"
                            >confirm
                            </button>
                        </label>
                    </form>
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
        checkCode: guestCheckCheckin,
        reset: guestResetCheckin
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckinCode);
