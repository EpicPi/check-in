import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostEditEvent} from "../../actions";

class HostEditEvent extends Component {
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

    componentWillMount() {
        this.setState({
            eventName: this.props.event.name,
            code: this.props.event.code,
        })
    }

    handleNameInput(e) {
        this.setState({eventName: e.target.value});
    }

    handleCodeInput(e) {
        this.setState({code: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = {
            ...this.props.event,
            name: this.state.eventName,
            code: this.state.code,
        };
        this.props.editEvent(event);
        this.setState({
            eventName: '',
            code: '',
        });

        this.props.history.push('/host');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="create-form">
                    <label>
                        Event Name:
                        <input
                            type="text"
                            name="eventName"
                            value={this.state.eventName}
                            onChange={this.handleNameInput}
                            required
                        />
                    </label>

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
                    <button
                        type="submit"
                        value="Submit"
                        className="btn btn-info">Submit
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.selected,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        editEvent: hostEditEvent,
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(HostEditEvent);
