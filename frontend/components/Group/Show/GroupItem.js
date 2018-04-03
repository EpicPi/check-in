import { connect } from 'react-redux';
import React, { Component } from 'react';
import { removeGroup, selectGroup } from '../../../actions/groupActions';

class GroupItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.selectEvent(this.props.group);
    this.props.history.push('/group/detail');
  }

  handleRemove() {
    this.props.removeGroup(this.props.group);
  }
  render() {
    return (
      <div className="host-event list-group-item bg-light text-dark">
        <div className="row">
          <div className="col-md-12">
            <span>Name: {this.props.group.name}</span>
            <span style={{ float: 'right' }}>
              <button
                onClick={this.handleClick}
                className="btn btn-success btn-event"
              >
                Select
              </button>
              <button
                onClick={this.handleRemove}
                className="btn btn-danger btn-event"
              >
                Remove
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    selectGroup: selectGroup,
    removeGroup: removeGroup
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupItem);
