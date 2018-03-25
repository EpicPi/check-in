import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { USER } from '../helpers/Enums';
import logo from '../assets/images/eventensure.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: true
    };
    this.onToggleNav = this.onToggleNav.bind(this);
  }

  onToggleNav() {
    this.setState({ navCollapsed: !this.state.navCollapsed });
    console.log(this.state);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  getAuthOutput() {
    switch (this.props.user) {
      case null:
        return 'still deciding';
      case false:
        return <a href={'/api/auth/google/get'}>log in</a>;
      default:
        return <a href={'/api/auth/logout'}>log out</a>;
    }
  }

  getDashOutPut() {
    if (this.props.user && this.props.type) {
      return (
        <Link to={this.props.type === USER.HOST ? '/host' : '/guest'}>
          Dash
        </Link>
      );
    }
  }
  render() {
    const { navCollapsed } = this.state;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bgColor nav-text">
        <div className="container-fluid">
          <Link to={'/'} className="w-50 mr-auto">
            <img src={logo} width={125} />
          </Link>
          <button
            aria-expanded="false"
            onClick={this.onToggleNav}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              (navCollapsed ? 'collapse' : '') + ' navbar-collapse w-100'
            }
            id="collapsingNavbar"
          >
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item active">
                <h4 className="nav-link" href="#">
                  {this.getDashOutPut()}
                </h4>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <li className="nav-item active">
                <h4 className="nav-link">{this.getAuthOutput()}</h4>
              </li>
            </ul>
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

function mapDispatchToProps() {
  return {
    fetchUser: fetchUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(Header);
