import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const STATES = require('../data/states');

var StatesField = createClass({
  displayName: 'StatesField',
  propTypes: {
    label: PropTypes.string,
    searchable: PropTypes.bool
  },
  getDefaultProps() {
    return {
      label: 'States:',
      searchable: true
    };
  },
  updateValue(newValue) {
    this.setState({
      selectValue: newValue
    });
  },
  render() {
    var options = STATES[this.state.country];
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select
          id="state-select"
          ref={ref => {
            this.select = ref;
          }}
          onBlurResetsInput={false}
          onSelectResetsInput={false}
          options={options}
          simpleValue
          clearable="true"
          name="selected-state"
          value={this.state.selectValue}
          onChange={this.updateValue}
          searchable="true"
        />
      </div>
    );
  }
});

module.exports = StatesField;
