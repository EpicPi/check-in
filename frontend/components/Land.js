import {Component} from "react";
import {setUserType} from "../actions";
import {connect} from "react-redux";
import React from "react";
import {USER} from "../helpers";

class Land extends Component {
    componentDidMount() {
    }

    handleClick(type){
        if(this.props.user)
        if(type === USER.HOST){
            this.props.setUserType(USER.HOST);
            this.props.history.push('/host');
        }else{
            this.props.setUserType(USER.GUEST);
            this.props.history.push('/host');
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleClick(USER.HOST)}>host</button>
                <button onClick={()=>this.handleClick(USER.GUEST)}>guest</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
    };
}

function mapDispathToProps(props) {
    return {
        setUserType: setUserType,
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Land);
