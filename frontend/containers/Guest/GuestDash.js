import ShowEvents from "../Host/HostShowEvents";
import EventDetail from "../Host/EventDetail";
import CreateEvent from "../Host/CreateEvent";
import React, {Component} from "react";
import {Route} from "react-router-dom";

class GuestDash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path='/guest' component={ShowEvents}/>
                <Route exact path='/guest/join' component={CreateEvent}/>
                <Route exact path='/guest/event' component={EventDetail}/>
            </div>
        );
    }
}


export default GuestDash;
