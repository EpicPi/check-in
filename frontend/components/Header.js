import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { USER } from '../helpers/Enums';

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderContent() {
        switch (this.props.user) {
            case null:
                return 'stil deciding';
            case false:
                return <a href={'/api/auth/google/get'}>log in</a>;
            default:
                return <a href={'/api/auth/logout'}>log out</a>;
        }
    }

    render() {
        return (
            <nav className="navbar bg-primary fixed-top nav-text">
                <div className="container-fluid">
                    <div
                        className="row justify-content-between text-center"
                        style={{ width: '100%' }}
                    >
                        <div className="col">
                            <h1>
                                <Link to={'/'}>Check-in</Link>
                            </h1>
                        </div>

                        <div className="col">
                            <h2>
                                <Link
                                    to={
                                        this.props.user
                                            ? this.props.type
                                                ? this.props.type === USER.HOST
                                                    ? '/host'
                                                    : '/guest'
                                                : '/'
                                            : '/'
                                    }
                                >
                                    Dash
                                </Link>
                            </h2>
                        </div>

                        <div className="col">
                            <h4>{this.renderContent()}</h4>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        type: state.auth.userType
    };
}

function mapDispathToProps() {
    return {
        fetchUser: fetchUser
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Header);
