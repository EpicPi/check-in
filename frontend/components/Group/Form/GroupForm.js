import { connect } from 'react-redux';
import React, { Component } from 'react';
import { codeTakenError, submitButton } from '../../../assets/text';
import {
  checkGroupCode,
  resetGroupcheckCode
} from '../../../actions/groupActions';
import { CHECK_CODE, JOIN_FIND } from '../../../helpers/Enums';
import { hostCreateGroup, hostEditGroup } from '../../../actions';

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (this.props.add)
      this.state = {
        name: '',
        code: ''
      };
    else
      this.state = {
        name: this.props.selected.name,
        code: this.props.selected.code
      };
  }

  componentWillUpdate(props, state) {
    // if editing and you changed from initial or if you are creating
    if (state.code !== props.selected.code && state.code !== this.state.code)
      props.check(state.code);
  }

  componentWillUnmount() {
    this.props.resetCode();
  }

  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.props.checkCode !== JOIN_FIND.FAIL &&
      this.state.code !== this.props.selected.code
    ) {
      alert(codeTakenError);
      return;
    }
    const group = {
      ...this.props.selected,
      name: this.state.name,
      code: this.state.code
    };
    if (this.props.add) this.props.addGroup(group);
    else this.props.editGroup(group);

    this.props.history.push('/group');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-12">
            <label className="col-form-label">Group Name</label>
            <div>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleGeneral}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label className="col-form-label">Group Join Code</label>
            <div>
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
    checkCode: state.group.checkCode,
    selected: state.group.selected
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    check: checkGroupCode,
    addGroup: hostCreateGroup,
    editGroup: hostEditGroup,
    resetCode: resetGroupcheckCode
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupForm);
