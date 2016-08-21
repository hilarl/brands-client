import React, { Component, PropTypes } from 'react';

class Organization extends Component {
  index() {
    return null;
  }
  render() {
    return (
      <div>Pages</div>
    );
  }
}

Organization.PropTypes = {
  index: PropTypes.array.isRequired
};

export default Organization;
