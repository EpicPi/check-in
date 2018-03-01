import React, {Component} from "react";
import {Route} from "react-router-dom";
import GuestShowEvents from "./GuestShowEvents";
import GuestJoinEvent from "./GuestJoinEvent";
import GuestEventDetail from "./GuestEventDetail";

class GuestDash extends Component {
    render() {
        return (
            <div>
                <Route exact path='/guest' component={GuestShowEvents}/>
                <Route exact path='/guest/join' component={GuestJoinEvent}/>
                <Route exact path='/guest/event' component={GuestEventDetail}/>
            </div>
        );
    }
}
export default GuestDash;
