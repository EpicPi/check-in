import React, {Component} from 'react';
import {Route} from "react-router-dom";
import HostCreateEvent from './CreateEvent';
import HostShowEvents from './HostShowEvents';
import HostEventDetail from './EventDetail';

class HostDash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Route exact path='/host' component={HostShowEvents}/>
                    <Route exact path='/host/create' component={HostCreateEvent}/>
                    <Route exact path='/host/event' component={HostEventDetail}/>
                </div>
        );
    }
}


export default HostDash;

