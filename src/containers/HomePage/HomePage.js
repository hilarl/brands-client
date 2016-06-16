import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  index() {
    return null
  }
  render() {
    return (
      <div>
        <Link to="/home">Welcome</Link>
      </div>
    );
  }
}

HomePage.PropTypes = {
  index: PropTypes.array.isRequired
};

export default HomePage;
