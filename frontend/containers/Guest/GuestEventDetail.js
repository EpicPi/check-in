import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guestCheckin} from "../../actions";

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
        this.props.history.push('/guest/checkin');
    }
}
const mapStateToProps = (state) => {
    return {
        event : state.event.selected,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};
export default connect(mapStateToProps,mapDispatchToProps())(GuestEventDetail);
