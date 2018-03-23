import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    guestFindEvent,
    guestJoinEvent,
    guestResetJoinFind
} from '../../../actions/index';
import { JOIN_FIND } from '../../../helpers/Enums';
import JoinBasic from './JoinBasic';
import JoinName from './JoinName';

class GuestJoinEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            out: this.getJoinFindOutput(this.props)
        };

        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(next) {
        this.setState({ out: this.getJoinFindOutput(next) });
    }

    componentWillUnmount() {
        this.props.resetJoin();
    }

    handleCodeInput(e) {
        this.setState({ code: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findEvent(this.state.code);
    }

    getJoinFindOutput(props) {
        switch (props.joinFind) {
            case JOIN_FIND.FAIL:
                return <h4>Couldn't find, please check code</h4>;
            case JOIN_FIND.SUCCESS:
                return <JoinName history={this.props.history} />;
            case JOIN_FIND.CHECKING:
                return <h4>Checking code</h4>;
            case JOIN_FIND.ALREADY_JOINED:
                return <h4>You already RSVPed for this event!</h4>;
            default:
                return '';
        }
    }

    render() {
        return (
            <div className="guest-join">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">
                                        Code
                                    </label>
                                    <div className="col-md-9">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="code"
                                            value={this.state.code}
                                            onChange={this.handleCodeInput}
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    className="form-group btn btn-success"
                                    type="submit"
                                    value="Submit"
                                >
                                    Submit
                                </button>
                            </form>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    {this.state.out}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        joinFind: state.guest.joinFind,
        eventToJoin: state.guest.eventToJoin
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        findEvent: guestFindEvent,
        joinEvent: guestJoinEvent,
        resetJoin: guestResetJoinFind
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestJoinEvent);
