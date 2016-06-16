import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class TalentManager extends Component {
  index() {
    return null
  }
  render() {
    return (
      <div >
        Talent Manager 
      </div>
    );
  }
}

TalentManager.PropTypes = {
  index: PropTypes.array.isRequired
};

export default TalentManager;
