import React, { Component } from 'react';
import { connect } from 'react-redux';
import HostEventGuestItem from './HostEventGuestItem';
import { getAttends, getRSVPs } from '../../actions/index';
import { LOAD } from '../../helpers/Enums';

class HostEventDetail extends Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);

        //gotta make the call to load them
        this.props.getAttends(this.props.event);
        this.props.getRSVPs(this.props.event);

        this.state = {
            rsvps: this.getRSVPsOutput(this.props),
            attends: this.getAttendsOutput(this.props),
            uriRsvp: this.getUriRSVPOutput(this.props),
            uriAttend: this.getUriAttendsOutput(this.props)
        };
    }

    handleEditClick() {
        this.props.history.push('/host/edit');
    }

    componentWillReceiveProps(props) {
        this.setState({
            rsvps: this.getRSVPsOutput(props),
            attends: this.getAttendsOutput(props),
            uriRsvp: this.getUriRSVPOutput(props),
            uriAttend: this.getUriAttendsOutput(props)
        });
    }

    getUriRSVPOutput(props) {
        switch (props.rsvps) {
            case LOAD.LOADING:
                return;
            case LOAD.NOTHING:
                return;
            default:
                let csvContent = 'data:text/csv;charset=utf-8,';
                props.rsvps.forEach(el => {
                    const row = el.name + ',' + el.extra;
                    csvContent += row + '\r\n';
                });
                return csvContent;
        }
    }

    getUriAttendsOutput(props) {
        switch (props.rsvps) {
            case LOAD.LOADING:
                return;
            case LOAD.NOTHING:
                return;
            default:
                let csvContent = 'data:text/csv;charset=utf-8,';
                props.attends.forEach(el => {
                    const row = el.name + ',' + el.extra;
                    csvContent += row + '\r\n';
                });
                return csvContent;
        }
    }

    getRSVPsOutput(props) {
        switch (props.rsvps) {
            case LOAD.LOADING:
                return <h3>LOADING</h3>;
            case LOAD.NOTHING:
                return;
            default:
                return props.rsvps.map((guest, i) => (
                    <HostEventGuestItem
                        history={props.history}
                        key={i}
                        guest={guest}
                    />
                ));
        }
    }

    getAttendsOutput(props) {
        switch (props.attends) {
            case LOAD.LOADING:
                return <h3>LOADING</h3>;
            case LOAD.NOTHING:
                return;
            default:
                return props.attends.map((guest, i) => (
                    <HostEventGuestItem
                        history={props.history}
                        key={i}
                        guest={guest}
                    />
                ));
        }
    }

    render() {
        return (
            <div>
                <br />
                <div>Name: {this.props.event.name}</div>
                <br />
                <div>Code: {this.props.event.code}</div>
                <br />
                <div>Info: {this.props.event.info}</div>
                <br />
                <div>
                    RSVP Start:{' '}
                    {new Date(this.props.event.dates.rsvpStart).toString()}
                </div>
                <div>
                    RSVP End:{' '}
                    {new Date(this.props.event.dates.rsvpEnd).toString()}
                </div>
                <div>
                    Checkin Start:{' '}
                    {new Date(this.props.event.dates.checkinStart).toString()}
                </div>
                <div>
                    Checkin End:{' '}
                    {new Date(this.props.event.dates.checkinEnd).toString()}
                </div>
                <br />
                <br />
                <button onClick={this.handleEditClick}>Edit Event</button>
                <br />
                <br />
                <div>
                    <br />
                    RSVPs:
                    <a
                        href={this.state.uriRsvp}
                        download={this.props.event.name + '_rsvps.csv'}
                    >
                        {' '}
                        download csv
                    </a>
                    <hr />
                    {this.state.rsvps}
                    <br />
                </div>
                <div>
                    Attendees:
                    <a
                        href={this.state.uriAttend}
                        download={this.props.event.name + '_attends.csv'}
                    >
                        {' '}
                        download csv
                    </a>
                    <hr />
                    {this.state.attends}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.selected,
        rsvps: state.event.selectedRSVPs,
        attends: state.event.selectedAttends
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getRSVPs: getRSVPs,
        getAttends: getAttends
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(HostEventDetail);
