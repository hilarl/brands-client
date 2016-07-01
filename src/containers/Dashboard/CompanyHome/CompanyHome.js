import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './CompanyHome.scss';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ActionBuild from 'material-ui/svg-icons/action/build';

import CalendarBlock from './components/CalendarBlock';
import TalentBlock from './components/TalentBlock';
import TalentChartBlock from './components/TalentChartBlock';
import BrandChartBlock from './components/BrandChartBlock';

import AddOrganizationDialog from './components/AddOrganizationDialog';
import RaisedButton from 'material-ui/RaisedButton';

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event, index, value) { this.setState({value})};
  index() {
    return null
  }

  handleModalOpen() {
    this.setState({open: true});
  };

  handleModalClose() {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleModalClose}
      />,
      <FlatButton
        label="Save"
        backgroundColor="#6A96D2"
        hoverColor="#5E87C0"
        rippleColor="#7BA1D4"
        labelStyle={{color: "white"}}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleModalClose}
      />,
    ];

    return (
      <div className="container-fluid CompaniesMainNav">
        <div className="container-fluid">
          <div style={{padding: 0}} className="CompanyDashboardWelcome col-md-6">
            <img style={{height: "50px", float: "left", marginRight: "15px"}} src="https://www.facebookbrand.com/img/fb-art.jpg" />
            <h1 style={{margin: "0", fontWeight: "100", fontSize: "28px", marginTop: "10px"}}>Facebook, inc</h1>
          </div>
          <div style={{padding: 0, textAlign: "right"}} className="col-md-6">
            <FlatButton
              onTouchTap={this.handleModalOpen}
              icon={<ContentAdd className="OrganizationAddButton"/>}
              labelStyle={{fontSize: "12px", color: "white", fontWeight: "100", letterSpacing: "0.5px"}} backgroundColor="#6A96D2" label="Create Organization" />
              <IconButton tooltip="Manage Organizations" style={{transform: "translate3d(0px, 7px, 0px)", marginLeft: "15px"}}>
                <ActionBuild  />
              </IconButton>
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3 style={{marginBottom: "15px"}}>Calendar</h3>
            <CalendarBlock />
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3>Job Applicants</h3>
            <TalentChartBlock />
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3 style={{marginBottom: "15px"}}>Talent Matches</h3>
            <TalentBlock />
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3>Brand Reach</h3>
            <BrandChartBlock />
          </div>
        </div>
        <AddOrganizationDialog
          title="Add Organization"
          open={this.state.open}
          onRequestClose={this.handleModalClose}
          autoScrollBodyContent={true}
          actions={actions}
        />
      </div>
    );
  }
}

CompanyHome.PropTypes = {
  index: PropTypes.array.isRequired
};

export default CompanyHome;
