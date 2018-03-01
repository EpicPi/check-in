import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUser, login} from "../actions";
import {USER} from "../helpers";

class Header extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    renderContent(){
        console.log(this.props.auth);
        switch (this.props.user){
            case null:
                return 'stil deciding';
            case false:
                return (
                    <a href={'/api/auth/google/get'}>log in</a>
                );
            default:
                return (
                    <a href={'/api/auth/logout'}>log out</a>
                );
        }
    }
    render() {
        return (
            <nav>
                <Link to={
                    this.props.user? (this.props.type? (this.props.type===USER.HOST?'/host':'/guest'):'/'):'/'
                }>
                    Home
                </Link>
                <br/>
                {this.renderContent()}
            </nav>
        );
    }
}
function mapStateToProps(state){
    return {
        user: state.auth.user,
        type: state.auth.userType,
    };
}
function mapDispathToProps() {
    return{
        fetchUser: fetchUser,
    };
}

export default connect(mapStateToProps,mapDispathToProps())(Header);