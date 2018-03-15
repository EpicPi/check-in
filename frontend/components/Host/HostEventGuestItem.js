import {Component} from "react";
import {connect} from 'react-redux';
import React from "react";

class HostEventItem extends Component {

    render() {
        return (
            <div>
                Name: {this.props.guest.name}
                GT username: {this.props.guest.extra}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (/* dispatch */) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps())(HostEventItem);
