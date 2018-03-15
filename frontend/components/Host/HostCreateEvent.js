import React, {Component} from 'react';
import HostEvent from "./HostEvent";

class HostCreateEvent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Create Event</h2>
                    </div>
                </div>
                <HostEvent history={this.props.history} add={true}/>
            </div>
        );
    }
}

export default HostCreateEvent;
