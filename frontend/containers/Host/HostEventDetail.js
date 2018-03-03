import React, { Component } from 'react';
import { connect } from 'react-redux';
import HostEventGuestItem from "./HostEventGuestItem";

class HostEventDetail extends Component {
    render() {
        const guestsRSVP = this.props.event.guestsRSVP.map((guest, i) => (
            <HostEventGuestItem history ={this.props.history} key={i} guest={guest} />
        ));
        const guestsAttend = this.props.event.guestsAttend.map((guest, i) => (
            <HostEventGuestItem history ={this.props.history} key={i} guest={guest} />
        ));
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
                    Attendeess:
                    {guestsAttend}
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
        event : state.host.selectedEvent,
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};
export default connect(mapStateToProps,mapDispatchToProps())(HostEventDetail);
