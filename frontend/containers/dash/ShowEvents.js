import React, { Component } from 'react';
import Event from './Event';
import { connect } from 'react-redux';


class ShowEvents extends Component {
    render() {
        const events = this.props.events.map((event, i) => (
            <div key={i}>
                <Event name={event.name} code={event.code}/>
            </div>
        ));

        return (
            <ul>
                {events}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

// export default connect(
//     // mapStateToProps,
//     null,
//     mapDispatchToProps
// )(ShowEvents);

export default ShowEvents;
