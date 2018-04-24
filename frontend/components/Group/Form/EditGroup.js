import { connect } from 'react-redux';
import React, { Component } from 'react';
import GroupForm from './GroupForm';

class EditGroup extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="text-left">Edit Group</h2>
            <br />
          </div>
        </div>
        <GroupForm history={this.props.history} add={false} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(EditGroup);
