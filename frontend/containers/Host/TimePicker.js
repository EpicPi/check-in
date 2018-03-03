import React, { Component } from 'react';
import { connect } from 'react-redux';

const TODAY = new Date().toISOString().slice(0,10);

class TimePicker extends Component {
    constructor(props) {
        super(props);

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleTimeChange(event) {
        this.props.handleChange(event.target.value, null);
    }

    handleDateChange(event) {
        this.props.handleChange(null, event.target.value);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                    <input type="time" value={this.props.time} onChange={ this.handleTimeChange } required/>
                </div>
                <div className="col-md-6">
                    {/* TODO: put restrictions on imposible date */}
                    <input type="date" value={this.props.date} onChange={ this.handleDateChange } required/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps())(TimePicker);


