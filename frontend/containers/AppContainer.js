import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header";

const Dash = () => <h2>Dash</h2>;
const New = () => <h2>New</h2>;
const Land = () => <h2>Land</h2>;

class AppContainer extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Land}/>
                    <Route path='/dash' component={Dash}/>
                    <Route path='/new' component={New}/>
                </div>
            </BrowserRouter>
        );
    }
}

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    null,
    actions
)(AppContainer);
