import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FlatButton from 'material-ui/FlatButton';
import {grey50, yellow500, blue500} from 'material-ui/styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class ApplicantsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <List className="col-md-10 ApplicationsList">
        <Toolbar style={{background: "transparent", paddingRight: "0"}}>
          <div className="col-md-6" style={{padding: 0}}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{marginTop: "-5px"}}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="All Text" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
          </div>
            <div style={{padding: 0, textAlign: "right", marginTop: "-5px"}} className="col-md-6">
              <DropDownMenu style={{border: "none"}} className="CompanySelectMenu"  value={this.state.value} onChange={this.handleChange}>
                <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="https://www.facebookbrand.com/img/fb-art.jpg"/></span>} value={1} primaryText="Facebook" />
                <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="http://northdallasgazette.com/wordpress/wp-content/uploads/2016/05/Google-logo-2015-G-icon.png"/></span>} value={2} primaryText="Google" />
                <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="http://www.bladecreativebranding.com/blog/wp-content/uploads/2014/11/New-2014-Air-Bnb-Logo.png"/></span>} value={3} primaryText="Airbnb" />
              </DropDownMenu>
              <FlatButton backgroundColor="#6A96D2" icon={<ContentAdd className="TalentAddButton"/>} label="Post a job" labelStyle={{fontSize: "13px", color: "white", fontWeight: "100", letterSpacing: "0.5px"}} />
            </div>
        </Toolbar>
        <ListItem
          className="ApplicationsListItem"
          leftAvatar={<Avatar className="ApplicationsListItemImage" src="http://www.material-ui.com/images/kolage-128.jpg" />}
          rightIconButton={<div>
            <span className="ApplicationsListItemScoreLabel">Skills: <span className="score">5.0</span></span>
            <span className="ApplicationsListItemScoreLabel">Personality: <span className="score">4.0</span></span>
             {rightIconMenu}</div>}
          primaryText={<span className="ApplicationsListCandidate">Brendan Lim</span>}
          secondaryText={
            <p>
              <span className="ApplicationsListRole">Software Engineer</span><br />
              <span className="ApplicationsListLocation">London, United Kingdom</span>
              <span className="ApplicationsListSummary">I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
            </p>
          }
          secondaryTextLines={3}
        />
        <Divider inset={true} />
        <ListItem
          className="ApplicationsListItem"
          leftAvatar={<Avatar className="ApplicationsListItemImage" src="http://www.material-ui.com/images/kolage-128.jpg" />}
          rightIconButton={<div>
            <span className="ApplicationsListItemScoreLabel">Skills: <span className="score">5.0</span></span>
            <span className="ApplicationsListItemScoreLabel">Personality: <span className="score">4.0</span></span>
             {rightIconMenu}</div>}
          primaryText={<span className="ApplicationsListCandidate">Brendan Lim</span>}
          secondaryText={
            <p>
              <span className="ApplicationsListRole">Software Engineer</span><br />
              <span className="ApplicationsListLocation">London, United Kingdom</span>
              <span className="ApplicationsListSummary">I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
            </p>
          }
          secondaryTextLines={3}
        />
        <Divider inset={true} />
        <ListItem
          className="ApplicationsListItem"
          leftAvatar={<Avatar className="ApplicationsListItemImage" src="http://www.material-ui.com/images/kolage-128.jpg" />}
          rightIconButton={<div>
            <span className="ApplicationsListItemScoreLabel">Skills: <span className="score">5.0</span></span>
            <span className="ApplicationsListItemScoreLabel">Personality: <span className="score">4.0</span></span>
             {rightIconMenu}</div>}
          primaryText={<span className="ApplicationsListCandidate">Brendan Lim</span>}
          secondaryText={
            <p>
              <span className="ApplicationsListRole">Software Engineer</span><br />
              <span className="ApplicationsListLocation">London, United Kingdom</span>
              <span className="ApplicationsListSummary">I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
            </p>
          }
          secondaryTextLines={3}
        />
        <Divider inset={true} />
        <ListItem
          className="ApplicationsListItem"
          leftAvatar={<Avatar className="ApplicationsListItemImage" src="http://www.material-ui.com/images/kolage-128.jpg" />}
          rightIconButton={<div>
            <span className="ApplicationsListItemScoreLabel">Skills: <span className="score">5.0</span></span>
            <span className="ApplicationsListItemScoreLabel">Personality: <span className="score">4.0</span></span>
             {rightIconMenu}</div>}
          primaryText={<span className="ApplicationsListCandidate">Brendan Lim</span>}
          secondaryText={
            <p>
              <span className="ApplicationsListRole">Software Engineer</span><br />
              <span className="ApplicationsListLocation">London, United Kingdom</span>
              <span className="ApplicationsListSummary">I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
            </p>
          }
          secondaryTextLines={3}
        />
      </List>
    );
  }
}

export default ApplicantsPage;
