import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class UserManager extends Component {
  index() {
    return null
  }
  render() {
    return (
      <div>Pages</div>
    );
  }
}

UserManager.PropTypes = {
  index: PropTypes.array.isRequired
};

export default UserManager;
