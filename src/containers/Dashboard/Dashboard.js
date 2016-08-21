import React, { Component, PropTypes } from 'react';
import DashboardContainer from './DashboardContainer';
import './Dashboard.scss';

class Dashboard extends Component {
  index() {
    return null;
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

Dashboard.propTypes = {
  index: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
};

export default Dashboard;
