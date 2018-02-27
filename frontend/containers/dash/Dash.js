import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from "react-router-dom";
import CreateEvent from './CreateEvent';
import ShowEvents from './ShowEvents';
import Event from './Event';

class Dash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Route exact path='/dash' component={ShowEvents}/>
                    <Route exact path='/dash/create' component={CreateEvent}/>
                    <Route exact path='/dash/event' component={Event}/>
                </div>
        );
    }
}


export default Dash;

