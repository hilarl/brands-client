import React, { Component, PropTypes } from 'react';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RemoveRedEye from 'material-ui/svg-icons/content/inbox';
import PersonAdd from 'material-ui/svg-icons/action/account-circle';
import ContentLink from 'material-ui/svg-icons/file/folder-open';
import ContentCopy from 'material-ui/svg-icons/content/archive';
import Download from 'material-ui/svg-icons/action/assessment';
import Delete from 'material-ui/svg-icons/action/settings';

import ApplicantsPage from './ApplicantsPage/ApplicantsPage';

import './TalentManager.scss';


class TalentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  index() {
    return null
  }

  render() {
    return (
      <div className="container-fluid TalentToolBar">
        <div className="col-md-2" style={{padding: "0"}}>
          <Menu autoWidth={true} style={{padding: "0", maxWidth: "100%"}}>
            <MenuItem className="TalentLeftMenu" primaryText="Applicants" leftIcon={<RemoveRedEye />} />
            <MenuItem className="TalentLeftMenu" primaryText="Recommendations" leftIcon={<PersonAdd />} />
            <Divider />
            <MenuItem className="TalentLeftMenu" primaryText="Currents Jobs" leftIcon={<ContentLink />} />
            <MenuItem className="TalentLeftMenu" primaryText="All Jobs" leftIcon={<ContentCopy />} />
            <Divider />
            <MenuItem className="TalentLeftMenu" primaryText="Analytics" leftIcon={<Download />} />
            <MenuItem className="TalentLeftMenu" primaryText="Settings" leftIcon={<Delete />} />
          </Menu>
        </div>
        {this.props.children}
      </div>
    );
  }
}

TalentManager.PropTypes = {
  index: PropTypes.array.isRequired
};

export default TalentManager;
