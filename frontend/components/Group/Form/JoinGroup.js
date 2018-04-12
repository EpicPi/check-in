import { connect } from 'react-redux';
import React, { Component } from 'react';
import { submitButton } from '../../../assets/text';
import { checkGroupCode, joinGroup } from '../../../actions/groupActions';
import { hostJoinGroup } from '../../../actions';

class JoinGroup extends Component {
  constructor(props) {
    super(props);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      code: ''
    };
  }
  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.props.check(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.checkCode._id) {
      alert('Group not found');
      return;
    }
    this.props.join(this.props.checkCode);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <div className="form-group row">
          <label className="col-form-label col-md-3">Group Join Code</label>
          <div className="col-md-9">
            <input
              type="text"
              name="code"
              className="form-control"
              value={this.state.code}
              onChange={this.handleGeneral}
              required
            />
          </div>
        </div>
        <button type="submit" value="Submit" className="btn btn-success">
          {submitButton}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    checkCode: state.group.checkCode
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    check: checkGroupCode,
    join: hostJoinGroup
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(JoinGroup);
