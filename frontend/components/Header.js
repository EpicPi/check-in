import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUser} from "../actions";

class Header extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    renderContent(){
        console.log(this.props.auth);
        switch (this.props.auth){
            case null:
                return 'stil deciding';
            case false:
                return (
                    <a href={'/api/auth/google/get'}>log in</a>
                );
            default:
                return (
                    <a href={'/api/logout'}>log out</a>
                );
        }
    }
    render() {
        return (
            <nav>
                <Link to={
                    this.props.auth? '/dash': '/'
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
    return {auth: state.auth};
}
function mapDispathToProps(props) {
    return{
        fetchUser: fetchUser
    };
}

export default connect(mapStateToProps,mapDispathToProps())(Header);
