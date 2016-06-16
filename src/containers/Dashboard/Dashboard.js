import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './Dashboard.scss';

class Dashboard extends Component {
  index() {
    return null
  }
  render() {
    return (
      <div>
        <div className="container-fluid CompanyDashboardNav">
          <IndexLink className="col-md-2 CompanyDashboardNavLink active" to="/home">Overview</IndexLink>
          <Link className="col-md-2 CompanyDashboardNavLink" to="/pages">Manage Pages</Link>
          <Link className="col-md-2 CompanyDashboardNavLink" to="/talent">Manage Talent</Link>
          <Link className="col-md-2 CompanyDashboardNavLink" to="/users">Manage Users</Link>
          <Link className="col-md-2 CompanyDashboardNavLink" to="/organization">Organization</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Dashboard.PropTypes = {
  index: PropTypes.array.isRequired
};

export default Dashboard;
