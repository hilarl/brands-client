import React, { Component } from 'react';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toolbar from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FlatButton from 'material-ui/FlatButton';

import { browserHistory } from 'react-router';

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
      companyValue: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  handleCompanyChange(event, index, value) {
    this.setState({companyValue: value});
  }

  handlePostJob() {
    browserHistory.push('new-job');
  }

  render() {
    return (
      <List className="col-md-10 ApplicationsList">
        <Toolbar style={{background: "transparent", paddingRight: "0"}}>
          <div className="col-md-6" style={{padding: 0}}>
            <DropDownMenu underlineStyle={{border: "none"}} value={this.state.value} onChange={this.handleChange} style={{marginTop: "-5px"}}>
              <MenuItem value={1} primaryText="Recommended" />
              <MenuItem value={2} primaryText="Latest" />
              <MenuItem value={3} primaryText="Personality" />
              <MenuItem value={4} primaryText="Talent" />
            </DropDownMenu>
          </div>
            <div style={{padding: 0, textAlign: "right", marginTop: "-5px"}} className="col-md-6">
              <FlatButton
                style={{margin: "5px", marginTop: "10px"}}
                onClick = {this.handlePostJob}
                backgroundColor="#6A96D2"
                icon={<ContentAdd className="TalentAddButton"/>}
                label="Post a job"
                labelStyle={{fontSize: "13px", color: "white", fontWeight: "100", letterSpacing: "0.5px"}} />
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
