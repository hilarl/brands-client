import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PageManager extends Component {
  index() {
    return null
  }
  render() {

    return (
      <div>
        Page
      </div>
    );
  }
}


PageManager.PropTypes = {
  index: PropTypes.array.isRequired
};

export default PageManager;
