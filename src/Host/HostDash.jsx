import React, {Component} from 'react';

import CreateEventForm from './CreateEventForm';
import ViewEvents from './ViewEvents';
import cookie from 'react-cookies';

class HostDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            fb: props.fb,
        };
        this.addEvent = this.addEvent.bind(this);
    }

    componentWillMount() {
        this.state.fb.useresDB.child('/' + cookie.load('id') + '/events').once('value', (snapshot => {
            if (snapshot.val()!=null)
                this.setState({
                    events: Object.values(snapshot.val())
                });
        }));
    }

    addEvent(event) {
        const prevEvents = this.state.events;
        prevEvents.push(event);

        this.setState({events: prevEvents});
        // console.log(this.state.events);
        this.state.fb.addEvent(event);
    }

    render() {
        return (
            <div>
                <h1>Host {this.props.name}!</h1>
                <CreateEventForm addEvent={this.addEvent}/>
                <ViewEvents events={this.state.events}/>
            </div>
        );
    }
}

export default HostDash;