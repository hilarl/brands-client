import React from 'react';
import { Link, IndexLink } from 'react-router';

const DashboardContainer = (props) => {
  return (
    <div>
      <div className="container-fluid CompanyDashboardNav">
        <IndexLink className="col-md-3 CompanyDashboardNavLink activea" to="/home">Overview</IndexLink>
        <Link className="col-md-3 CompanyDashboardNavLink" to="/talent">Manage Talent</Link>
        <Link className="col-md-3 CompanyDashboardNavLink" to="/pages">Manage Pages</Link>
        <Link className="col-md-3 CompanyDashboardNavLink" to="/users">Manage Users</Link>
      </div>
    </div>
  );
}

export default DashboardContainer;
