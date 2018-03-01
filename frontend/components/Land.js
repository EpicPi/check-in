import {Component} from "react";
import {setUserType} from "../actions";
import {connect} from "react-redux";
import React from "react";
import {USER} from "../helpers";

class Land extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.props.setUserType(USER.HOST)}>host</button>
                <button onClick={()=>this.props.setUserType(USER.GUEST)}>guest</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

function mapDispathToProps(props) {
    return {
        setUserType: setUserType,
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Land);
