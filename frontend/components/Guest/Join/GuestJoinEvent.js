import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guestFindEvent, guestJoinEvent, guestResetJoinFind} from "../../../actions/index";
import {JOIN_FIND} from "../../../helpers/Enums";
import JoinBasic from "./JoinBasic";
import JoinName from "./JoinName";

class GuestJoinEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            out: this.getJoinFindOutput(this.props),
        };

        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(next) {
        this.setState({out: this.getJoinFindOutput(next)});
    }

    componentWillUnmount() {
        this.props.resetJoin();
    }

    handleCodeInput(e) {
        this.setState({code: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findEvent(this.state.code);
    }

    getJoinFindOutput(props) {
        switch (props.joinFind) {
            case JOIN_FIND.FAIL:
                return <h3>Couldn't find, please check code</h3>;
            case JOIN_FIND.SUCCESS:
                return (<JoinName history={this.props.history}/>);
            case JOIN_FIND.CHECKING:
                return <h3>Checking code</h3>;
            case JOIN_FIND.ALREADY_JOINED:
                return <h3>You already RSVPed for this event!</h3>;
            default:
                return '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                {this.state.out}
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
        resetJoin: guestResetJoinFind
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestJoinEvent);
