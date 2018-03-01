import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventDetail extends Component {
    render() {
        return (
            <div>
                <div>
                    Name: {this.props.event.name}
                </div>
                <div>
                    Code: {this.props.event.code}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        event : state.eve.selectedEvent,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};
export default connect(mapStateToProps,mapDispatchToProps())(EventDetail);
