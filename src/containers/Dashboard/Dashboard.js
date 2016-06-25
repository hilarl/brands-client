import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import DashboardContainer from './DashboardContainer';
import './Dashboard.scss';

class Dashboard extends Component {
  index() {
    return null
  }
  render() {
    return (
      <div>
        <DashboardContainer />
        {this.props.children}
      </div>
    );
  }
}

Dashboard.PropTypes = {
  index: PropTypes.array.isRequired
};

export default Dashboard;
