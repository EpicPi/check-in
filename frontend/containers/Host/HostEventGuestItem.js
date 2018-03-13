import {Component} from "react";
import {connect} from 'react-redux';
import React from "react";

class HostEventItem extends Component {
    handleClick(event) {
        this.props.selectEvent(event);
        this.props.history.push('/host/event');
    }

    handleRemove(event) {
        this.props.removeEvent(event);
    }


    render() {
        return (
            <div>
                Name: {this.props.guest.name}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps())(HostEventItem);
