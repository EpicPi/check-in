import {Component} from "react";
import {guestRemoveEvent, selectEvent} from "../../actions";
import {connect} from 'react-redux';
import React from "react";

class GuestEventItem extends Component {
    handleClick(event) {
        this.props.selectEvent(event);
        this.props.history.push('/guest/event');
    }

    handleRemove(event) {
        this.props.removeEvent(event);
    }


    render() {
        return (
            <div className="guest-event list-group-item bg-light text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <span>
                            Name: {this.props.event.name}
                        </span>
                        <span style={{float: "right"}}>
                            <button
                                onClick={() => this.handleClick(this.props.event)}
                                className="btn btn-info btn-event">more info</button>
                            <button
                                onClick={() => this.handleRemove(this.props.event)}
                                className="btn btn-danger btn-event">Remove</button>
                        </span>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        selectEvent: selectEvent,
        removeEvent: guestRemoveEvent
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(GuestEventItem);
