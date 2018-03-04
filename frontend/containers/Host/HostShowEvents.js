import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostGetEvents, hostRemoveEvent, hostSelectEvent} from "../../actions";
import Link from "react-router-dom/es/Link";
import HostEventItem from "./HostEventItem";


class HostShowEvents extends Component {
    constructor(props) {
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
    }

    componentDidMount() {
        if (this.props.events.length === 0)
            this.props.getEvents();
    }

    handleCreate() {
        this.props.history.push('/host/create');
    }

    render() {
        const events = this.props.events.map((event, i) => (
            <HostEventItem history={this.props.history} key={i} event={event}/>
        ));
        return (
            <div className="row host-show">
                <div className="container-fluid">
                    <div className="row btn-create">
                        <div className="col-md-12">
                            <button className="btn btn-lg" onClick={this.handleCreate}>create
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="event-list">
                                {events}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.host.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: hostGetEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(HostShowEvents);

