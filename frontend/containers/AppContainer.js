import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header";

import HostDash from "./Host/HostDash";
import Land from "../components/Land";
import GuestDash from "./Guest/GuestDash";
import requireAuth from "../components/requireAuth";

class AppContainer extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container container-fluid">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <Route exact path='/' component={Land}/>
                                <Route path='/host' component={requireAuth(HostDash)}/>
                                <Route path='/guest' component={requireAuth(GuestDash)}/>
                            </div>
                        </div>
                    </div>
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
