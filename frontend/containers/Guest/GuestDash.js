import React, {Component} from "react";
import {Route} from "react-router-dom";
import GuestShowEvents from "./GuestShowEvents";
import GuestJoinEvent from "./GuestJoinEvent";
import GuestEventDetail from "./GuestEventDetail";
import HostEventDetail from "../Host/HostEventDetail";
import requireSelectedEvent from "../../Requirers/requireSelectedEvent";
import {resetEvent} from "../../actions";
import {connect} from "react-redux";

class GuestDash extends Component {
    componentWillMount() {
        this.props.resetEvent();
    }

    render() {
        return (
            <div>
                <Route exact path='/guest' component={GuestShowEvents}/>
                <Route exact path='/guest/join' component={GuestJoinEvent, '/guest'}/>
                <Route exact path='/guest/event' component={GuestEventDetail, '/guest'}/>
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

export default connect(mapStateToProps, mapDispatchToProps())(GuestDash);
