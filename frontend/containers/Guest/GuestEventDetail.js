import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guestCheckIn} from "../../actions";

class GuestEventDetail extends Component {
    constructor(props){
        super(props);
        this.handleCheckIn = this.handleCheckIn.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    Name: {this.props.event.name}
                </div>
                <button onClick={this.handleCheckIn}>Check In</button>
            </div>
        );
    }
    handleCheckIn(){
        this.props.checkIn(this.props.event);
        this.props.history.push('/guest');
    }
}
const mapStateToProps = (state) => {
    return {
        event : state.guest.selectedEvent,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        checkIn: guestCheckIn,
    };
};
export default connect(mapStateToProps,mapDispatchToProps())(GuestEventDetail);
