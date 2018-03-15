import React, {Component} from 'react';
import HostEvent from "./HostEvent";

class HostEditEvent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Edit Event</h2>
                    </div>
                </div>
                <HostEvent history={this.props.history} add={false}/>
            </div>
        );
    }
}

export default HostEditEvent;
