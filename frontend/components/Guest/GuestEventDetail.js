import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label">Name</label>
                        <label className="col-md-9 col-form-label">
                            {this.props.event.name}
                        </label>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label">Info</label>
                        <label className="col-md-9 col-form-label">
                            {this.props.event.info}
                        </label>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={this.handleCheckIn}
                    >
                        Check In
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.selected
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestEventDetail);
