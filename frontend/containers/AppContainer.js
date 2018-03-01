import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header";

import HostDash from "./Host/HostDash";

const Land = () => <h2>Land</h2>;

class AppContainer extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Land}/>
                    <Route path='/host' component={HostDash}/>
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

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
