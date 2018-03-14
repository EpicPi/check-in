import {Component} from "react";
import {guestCheckin} from "../../../actions/index";
import {connect} from "react-redux";
import React from "react";

class CheckinBasic extends Component {

    constructor(props) {
        super(props);
        this.handleCheckIn = this.handleCheckIn.bind(this);
    }

    handleCheckin() {
        this.props.checkin(this.props.event);
        this.props.history.push('/guest');
    }

    render() {
        return (
            <button onClick={this.handleCheckin}>Check In</button>
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
        checkin: guestCheckin,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckinBasic);
