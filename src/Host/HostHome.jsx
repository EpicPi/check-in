import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HostHome extends Component {
  render() {
    return (
      <div>
        <Link to="/create">
          <button>create an event</button>
        </Link>
        <Link to="/view">
          <button>view my events</button>
        </Link>
      </div>
    );
  }
}

export default HostHome;
