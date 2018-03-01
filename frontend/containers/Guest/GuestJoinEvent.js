import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guestJoinEvent, hostAddEvent} from "../../actions";

class GuestJoinEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            code: '',
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameInput(e) {
        this.setState({ eventName: e.target.value });
    }

    handleCodeInput(e) {
        this.setState({ code: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinEvent(this.state.code);
        this.setState({
            code: '',
        });

        this.props.history.push('/guest');
    }

    render() {
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
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        joinEvent: guestJoinEvent,
    };
};

export default connect(mapStateToProps,mapDispatchToProps())(GuestJoinEvent);
