import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guestFindEvent, guestJoinEvent, guestResetJoinFind} from "../../../actions/index";
import {JOIN_FIND} from "../../../helpers/Enums";

class JoinBasic extends Component {

    handleConfirm(e) {
        e.preventDefault();
        this.setState({
            code: ''
        });
        this.props.joinEvent(this.props.eventToJoin);
        this.props.history.push('/guest');
    }

    render() {
        return (
            <div>
                <h3>Please confirm RSVP for {this.props.eventToJoin.name}</h3>
                <button onClick={this.handleConfirm}>confirm</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        eventToJoin: state.guest.eventToJoin,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        joinEvent: guestJoinEvent,
        resetJoin: guestResetJoinFind
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(JoinBasic);
