import React, {Component} from 'react';
import {Route} from "react-router-dom";
import CreateEvent from './CreateEvent';
import ShowEvents from './ShowEvents';
import EventDetail from './EventDetail';

class HostDash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Route exact path='/host' component={ShowEvents}/>
                    <Route exact path='/host/create' component={CreateEvent}/>
                    <Route exact path='/host/event' component={EventDetail}/>
                </div>
        );
    }
}


export default HostDash;

