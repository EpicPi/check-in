import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guestFindEvent, guestJoinEvent, guestResetJoinFind, hostAddEvent} from "../../actions";
import {JOIN_FIND} from "../../helpers";

class GuestJoinEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleCodeInput = this.handleCodeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    componentWillMount() {
        this.props.resetJoin();
    }

    handleNameInput(e) {
        this.setState({eventName: e.target.value});
    }

    handleCodeInput(e) {
        this.setState({code: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findEvent(this.state.code);
    }

    handleConfirm(e) {
        this.setState({
            code: ''
        });
        this.props.joinEvent(this.props.eventToJoin);
        this.props.history.push('/guest');
    }

    checkJoinFind() {
        switch (this.props.joinFind) {
            case JOIN_FIND.FAIL:
                return <h3>Couldn't find, please check code</h3>;
            case JOIN_FIND.SUCCESS:
                return (
                    <div>
                        <h3>Please confirm RSVP for {this.props.eventToJoin.name}</h3>
                        <button onClick={this.handleConfirm}>confirm</button>
                    </div>);
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
                {this.checkJoinFind()}
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
