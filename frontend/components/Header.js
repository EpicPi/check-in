import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUser} from "../actions";
import {USER} from "../helpers/Enums";

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderContent() {
        switch (this.props.user) {
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
            <nav className="navbar bg-primary fixed-top">
                <div className="container-fluid">
                    <div className="text-white">
                        <h1>
                            <Link to={'/'}>
                                Check-in
                            </Link>
                        </h1>
                    </div>
                    <div className="text-white">
                        <h3>
                            <Link to={
                                this.props.user ? (this.props.type ? (this.props.type === USER.HOST ? '/host' : '/guest') : '/') : '/'
                            }>
                                Dash
                            </Link>
                        </h3>
                    </div>
                    <p style={{float: "right"}} className="text-white">
                        {this.renderContent()}
                    </p>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        type: state.auth.userType,
    };
}

function mapDispathToProps() {
    return {
        fetchUser: fetchUser,
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Header);
