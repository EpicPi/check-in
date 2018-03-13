import {Component} from "react";
import {resetEvent} from "../../actions";
import {connect} from "react-redux";
import React from "react";

class GuestCheckIn extends Component {
    render(){
        return (
            <div>
                checkIn
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = () => {
    return {
        resetEvent: resetEvent,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestCheckIn);
