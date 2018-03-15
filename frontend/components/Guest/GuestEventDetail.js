import React, {Component} from 'react';
import {connect} from 'react-redux';

class GuestEventDetail extends Component {

    constructor(props) {
        super(props);
        this.handleCheckIn = this.handleCheckIn.bind(this);
    }

    handleCheckIn() {
        this.props.history.push('/guest/checkin');
    }

    render() {
        return (
            <div>
                <div>
                    Name: {this.props.event.name}
                </div>
                <div>
                    Info: {this.props.event.info}
                </div>
                <button onClick={this.handleCheckIn}>Check In</button>
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
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps())(GuestEventDetail);
