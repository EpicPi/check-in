import React, { Component } from 'react';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      code: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleCodeInput = this.handleCodeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameInput(e) {
    this.setState({ eventName: e.target.value });
  }

  handleCodeInput(e) {
    this.setState({ code: e.target.value });
  }

  handleSubmit(e) {
    const event = {
      name: this.state.eventName,
      code: this.state.code
    };
    this.props.addEvent(event);
    // alert(`${this.state.eventName} ${this.state.code}`);
    this.setState({
      eventName: '',
      code: '',
    });
    e.preventDefault();
  }

  render() {
    return (
      <form action="" id="create-form">
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleNameInput}
          />
        </label>
        <label>
          Code:
          <input type="text" name="code" value={this.state.code} onChange={this.handleCodeInput} />
        </label>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default CreateEventForm;
