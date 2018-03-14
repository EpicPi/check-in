import {Component} from "react";
import {guestCheckCheckin, guestCheckin, resetEvent} from "../../../actions/index";
import {connect} from "react-redux";
import React from "react";
import {CHECK_CHECKIN, EVENT_TYPES as EVENT_TYPE} from "../../../helpers/Enums";
import {TODAY} from "../../../helpers/Time";
import CheckinBasic from "./CheckinBasic";
import CheckinCode from "./CheckinCode";

class GuestCheckIn extends Component {

    constructor(props) {
        super(props);
    }

    getCheckinScreen(){
        switch(event.type){
            case EVENT_TYPE.CODE:
                return <CheckinCode/>
            default:
                return <CheckinBasic/>
        }
    }
    render() {
        return (
            <div>
                {this.getCheckinScreen()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
    };
};
const mapDispatchToProps = () => {
    return {
        resetEvent: resetEvent,
        checkin: guestCheckin,
        checkCode: guestCheckCheckin
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestCheckIn);
