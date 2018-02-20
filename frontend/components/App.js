import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

import {connect} from 'react-redux';
import * as actions from '../actions';

const Dash = () => <h2>Dash</h2>;
const New = () => <h2>New</h2>;
const Land = () => <h2>Land</h2>;

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
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

export default connect(null, actions)(App);
