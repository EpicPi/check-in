import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guestFindEvent, guestJoinEvent, hostAddEvent} from "../../actions";
import {JOIN_FIND} from "../../helpers";

class GuestJoinEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            loading:'',
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }


    handleNameInput(e) {
        this.setState({ eventName: e.target.value });
    }

    handleCodeInput(e) {
        this.setState({ code: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findEvent(this.state.code);
        this.setState({
            loading:<h3>Checking</h3>
        });
    }
    handleConfirm(e){
        this.setState({
            code:''
        });
        this.props.joinEvent(this.props.eventToJoin);
        this.props.history.push('/guest/');
    }

    render() {
        let result = '';
        if(this.props.joinFind === JOIN_FIND.FAIL){
            result = <h3>Couldn't find, please check code</h3>
        }else if(this.props.joinFind === JOIN_FIND.SUCCESS){
            result= (
                <div>
                    <h3>Please confirm RSVP for {this.props.eventToJoin.name}</h3>
                    <button onClick={this.handleConfirm}>confirm</button>
                </div>)
        }else if(this.props.joinFind === JOIN_FIND.CHECKING){
            result = <h3>Checking code</h3>
        }else if(this.props.joinFind === JOIN_FIND.ALREADY_JOINED){
            result = <h3>You already RSVPed for this event!</h3>
        }
        return (
            <form onSubmit={this.handleSubmit} id="create-form">
                <label>
                    Code:
                    <input
                        type="text"
                        name="code"
                        value={this.state.code}
                        onChange={this.handleCodeInput}
                        required
                    />
                </label>
                <div className="row">
                    <div className="col">
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                </div>
                {result}
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        joinFind: state.guest.joinFind,
        eventToJoin: state.guest.eventToJoin,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        findEvent: guestFindEvent,
        joinEvent: guestJoinEvent,
    };
};

export default connect(mapStateToProps,mapDispatchToProps())(GuestJoinEvent);
