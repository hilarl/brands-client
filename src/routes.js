import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage/HomePage';
import Dashboard from './containers/Dashboard/Dashboard';
import DashboardContainer from './containers/Dashboard/DashboardContainer';
import CompanyHome from './containers/Dashboard/CompanyHome/CompanyHome';
import PageManager from './containers/Dashboard/PageManager/PageManager';
import TalentManager from './containers/Dashboard/TalentManager/TalentManager';
import ApplicantsPage from './containers/Dashboard/TalentManager/ApplicantsPage/ApplicantsPage';
import UserManager from './containers/Dashboard/UserManager/UserManager';
import Organization from './containers/Dashboard/Organization/Organization';
import MessagesPage from './containers/MessagesPage/MessagesPage';
import NotFoundPage from './components/NotFoundPage.js';
import SignUpPage from './components/SignUpPage/SignUpPage.js';
import RequireAuthentication from './components/RequireAuthentication/RequireAuthentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/signup" component={SignUpPage} />
    <Route path="home" component={RequireAuthentication(Dashboard)}>
      <IndexRoute component={CompanyHome}/>
      <Route path="/messages" component={MessagesPage} />
      <Route path="/pages" component={PageManager} />
      <Route path="/talent" component={TalentManager}>
        <IndexRoute component={ApplicantsPage}/>
      </Route>
      <Route path="/users" component={UserManager} />
      <Route path="/organization" component={Organization} />
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
