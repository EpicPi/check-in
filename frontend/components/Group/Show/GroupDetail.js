import { connect } from 'react-redux';
import { Component } from 'react';
import { getGroupEvents } from '../../../actions/groupActions';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    group: state.group.selected
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    getEvents: getGroupEvents
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupDetail);
