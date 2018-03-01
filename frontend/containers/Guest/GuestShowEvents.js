import {Component} from "react";
import {guestGetEvents} from "../../actions";
import {connect} from "react-redux";

class GuestShowEvents extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        if (this.props.events.length === 0)
            this.props.getEvents();
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.guest.events,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getEvents: guestGetEvents,
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(GuestShowEvents);
