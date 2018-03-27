import { Component } from 'react';

class CodeForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <label>
            Check In Code:
            <div>
              <input
                type="text"
                name="checkinCode"
                value={this.props.checkinCode}
                onChange={this.props.handleGeneral}
                required
              />
            </div>
          </label>
        </div>
      </div>
    );
  }
}
export default CodeForm;
