import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hostGetEvents, hostRemoveEvent, hostSelectEvent} from "../../actions";
import Link from "react-router-dom/es/Link";
import HostEventItem from "./HostEventItem";


class HostShowEvents extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.events.length === 0)
            this.props.getEvents();
    }


    render() {
        const events = this.props.events.map((event, i) => (
            <HostEventItem history ={this.props.history} key={i} event={event} />
        ));
        return (
            <div className="row host-show">
                <div className="container-fluid">
                    <div className="row btn-create">
                        <div className="col-md-12">
                            <button className="btn btn-lg">
                                <Link to={'/host/create'}>create</Link>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
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

