import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.enterHost = this.enterHost.bind(this);
    this.enterGuest = this.enterGuest.bind(this);
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  enterHost() {
    // document.location.href = '/host';
    console.log('entered host');
  }

  enterGuest() {
    // document.location.href = '/guest';
    console.log('entered guest');
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="enter your name..."
          onChange={this.handleNameInput}
        />
        <div>
          <button onClick={this.enterHost}>Host</button>
          <button onClick={this.enterGuest}>Guest</button>
        </div>
      </div>
    );
  }
}

// NameForm.propTypes = {
//   handleName: React.PropTypes.func.isRequired,
// };


export default NameForm;
