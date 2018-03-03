import React from 'react';
import { withRouter } from 'react-router';
import {connect} from "react-redux";

export default function requireSelectedEvent(Component,path) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            console.log(this.props.selectedEvent);
            this.checkSelected();
        }

        checkSelected() {
            console.log(this.props.selectedEvent);
            if ( ! this.props.selectedEvent) {
                this.props.history.push(path);
            }
        }

        render() {
            return this.props.selectedEvent
                ? <Component { ...this.props } />
                : null;
        }

    }
    const mapStateToProps = (state) => {
        return {
            selectedEvent : state.event.selected
        };
    };

    const mapDispatchToProps = (/* dispatch */) => {
        return {

        };
    };

    return withRouter(connect(mapStateToProps,mapDispatchToProps())(AuthenticatedComponent));
}
