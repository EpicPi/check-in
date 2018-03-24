import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { EVENT_TYPES as EVENT_TYPE } from '../../../helpers/Enums';
import CheckinBasic from './CheckinBasic';
import CheckinCode from './CheckinCode';

class CheckIn extends Component {
  constructor(props) {
    super(props);
  }

  getCheckinScreen() {
    switch (this.props.event.type) {
      case EVENT_TYPE.CODE:
        return <CheckinCode history={this.props.history} />;
      default:
        return <CheckinBasic history={this.props.history} />;
    }
  }
  render() {
    return <div>{this.getCheckinScreen()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    event: state.event.selected
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckIn);
