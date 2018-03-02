import React, {Component} from 'react';
import {Route} from "react-router-dom";
import HostCreateEvent from './HostCreateEvent';
import HostShowEvents from './HostShowEvents';
import HostEventDetail from './HostEventDetail';

class HostDash extends Component {
    render() {
        return (
                <div className="container container-fluid">
                    <Route exact path='/host' component={HostShowEvents}/>
                    <Route exact path='/host/create' component={HostCreateEvent}/>
                    <Route exact path='/host/event' component={HostEventDetail}/>
                </div>
        );
    }
}
export default HostDash;

