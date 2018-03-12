import {Component} from "react";
import {resetUserType, setUserType} from "../actions";
import {connect} from "react-redux";
import React from "react";
import {USER} from "../helpers/Enums";

import "../../public/app.css";

class Land extends Component {
    componentWillMount() {
        this.props.resetUserType();
    }

    handleClick(type){
        if(this.props.user)
        if(type === USER.HOST){
            this.props.setUserType(USER.HOST);
            this.props.history.push('/host');
        }else{
            this.props.setUserType(USER.GUEST);
            this.props.history.push('/guest');
        }
    }

    render() {
        return (
            <div className="row landing">
                <div className="col-md-12">
                    <section className="selection">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        onClick={()=>this.handleClick(USER.HOST)}
                                        type="button"
                                        className="btn btn-lg btn-selection">host</button>
                                </div>
                                <div className="col-md-6">
                                    <button
                                        onClick={()=>this.handleClick(USER.GUEST)}
                                        type="button"
                                        className="btn btn-lg btn-selection">guest</button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </section>
                </div>
                <div className="col-md-12">
                    <section className="about">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Check-in</h1>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-offset-2 col-md-8 mx-auto text-center">
                                    <p>Easily RSVP your events!</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </section>
                </div>

                <div className="col-md-12">
                    <section className="who-we-are">
                        <div className="container-fluid">
                            <h2 className="text-center">Who we are</h2>
                            <div className="row">
                                <br></br>
                                <div className="col-md-offset-2 col-md-8 mx-auto text-center">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ab accusamus amet consectetur consequatur consequuntur cupiditate deleniti
                                        doloribus, ea, est fugiat illo nihil officia quae quaerat quod tempore,
                                        vero voluptatem voluptatibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </section>
                </div>

                <div className="col-md-12">
                    <section className="contact">
                        <div className="container-fluid">
                            <h2 className="text-center">Created By</h2>
                            <br/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>Sereym Baek</h3>
                                    <p>Github: SammyBaek</p>
                                </div>
                                <div className="col-sm-6">
                                    <h3>Piyush Kancharlawar</h3>
                                    <p>Github: epicpi</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
        resetUserType: resetUserType
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Land);
