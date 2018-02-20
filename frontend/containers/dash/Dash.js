import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Link} from "react-router-dom";
import CreateEvent from './CreateEvent';
import ShowEvents from './ShowEvents';

// const CreateEvent = () => <h2>create event</h2>;
// const ShowEvents = () => <h2>show events</h2>;


class Dash extends Component{
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
        this.addEvent = this.addEvent.bind(this);
    }

    addEvent(event) {
        const prevEvents = this.state.events;
        prevEvents.push(event);

        this.setState({events: prevEvents});
        console.log(this.state.events);
        console.log(this.props.auth);
        // this.state.fb.addEvent(event);
    }


    render(){
        return (
            <div>
                <h2>Host {this.props.auth}</h2>
                <div>
                    <CreateEvent addEvent={this.addEvent}/>
                </div>
                <div>
                    <ShowEvents events={this.state.events}/>
                </div>
            </div>
        );
    }
}

Dash.propTypes = {
    // name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        // id: state.auth._id
        auth: state
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default Dash;
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dash);
