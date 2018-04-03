import { connect } from 'react-redux';
import { Component } from 'react';
import GroupForm from './GroupForm';
import { resetGroup } from '../../../actions/groupActions';

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.props.resetGroup();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <h2 className="text-left">Create Group</h2>
            <br />
            <GroupForm history={this.props.history} add={true} />
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
    resetGroup: resetGroup
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CreateGroup);
