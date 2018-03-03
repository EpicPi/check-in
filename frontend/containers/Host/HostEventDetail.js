import React, { Component } from 'react';
import { connect } from 'react-redux';
import HostEventGuestItem from "./HostEventGuestItem";
import {getAttends, getRSVPs} from "../../actions";

class HostEventDetail extends Component {
    componentWillMount(){
        this.props.getRSVPs(this.props.event);
        // this.props.getAttends(this.props.event);
    }
    render() {
        const guestsRSVP = this.props.rsvps.map((guest, i) => (
            <HostEventGuestItem history ={this.props.history} key={i} guest={guest} />
        ));
        // const guestsAttend = this.props.event.attends.map((guest, i) => (
        //     <HostEventGuestItem history ={this.props.history} key={i} guest={guest} />
        // ));
        return (
            <div>
                <div>
                    Name: {this.props.event.name}
                </div>
                <div>
                    Code: {this.props.event.code}
                </div>
                <button onClick={()=>this.handleEditClick()}>Edit Event</button>
                <div>
                    RSVPs:
                    {guestsRSVP}
                </div>
                <div>
                    Attendees:
                    {/*{guestsAttend}*/}
                </div>
            </div>
        );
    }
    handleEditClick(){
        this.props.history.push('/host/edit');
    }
}
const mapStateToProps = (state) => {
    return {
        event : state.event.selected,
        rsvps: state.event.selectedRSVPs,
        // attends: state.event.selectedAttends
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getRSVPs: getRSVPs,
        getAttends: getAttends
    };
};
export default connect(mapStateToProps,mapDispatchToProps())(HostEventDetail);
