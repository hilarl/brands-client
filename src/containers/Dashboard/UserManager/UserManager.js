import React, { Component, PropTypes } from 'react';

class UserManager extends Component {
  index() {
    return null;
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
