import React, {Component} from 'react';
import {Route} from "react-router-dom";
import CreateEvent from './CreateEvent';
import ShowEvents from './ShowEvents';
import EventDetail from './EventDetail';

class Dash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Route exact path='/dash' component={ShowEvents}/>
                    <Route exact path='/dash/create' component={CreateEvent}/>
                    <Route exact path='/dash/event' component={EventDetail}/>
                </div>
        );
    }
}


export default Dash;

