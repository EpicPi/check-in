import {Component} from "react";
import {guestGetEvents} from "../../actions";
import {connect} from "react-redux";
import React from "react";

class GuestShowEvents extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        // if (this.props.events.length === 0)
        //     this.props.getEvents();
    }
    render(){
        return(<div>hi</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        // events: state.guest.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: guestGetEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestShowEvents);