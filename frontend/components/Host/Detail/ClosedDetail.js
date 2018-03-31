import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicDetail from './BasicDetail';

class ClosedDetail extends Component {
  render() {
    return <BasicDetail history={this.props.history} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(ClosedDetail);
