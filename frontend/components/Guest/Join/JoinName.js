import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    guestFindEvent,
    guestJoinEvent,
    guestResetJoinFind
} from '../../../actions/index';
import { JOIN_FIND } from '../../../helpers/Enums';

class JoinName extends Component {
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            name: ''
        };
    }

    handleConfirm(e) {
        e.preventDefault();
        this.props.joinEvent(this.props.eventToJoin, this.state.name);
        this.props.history.push('/guest');
    }

    handleInput(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <form className="form">
                <br />
                <div className="form-group row">
                    <label className="col-md-12 col-form-label col-form-label-lg">
                        Please confirm RSVP for {this.props.eventToJoin.name}
                    </label>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        GT username:
                    </label>
                    <div className="col-md-9">
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                    </div>
                </div>
                <button
                    className="form-group btn btn-success"
                    type="submit"
                    value="Submit"
                    onClick={this.handleConfirm}
                >
                    confirm
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        eventToJoin: state.guest.eventToJoin
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        joinEvent: guestJoinEvent,
        resetJoin: guestResetJoinFind
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(JoinName);
