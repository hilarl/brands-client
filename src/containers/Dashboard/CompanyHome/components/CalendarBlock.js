import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import '../CompanyHome.scss';
import * as calendarActions from '../../../../actions/CalendarActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CalendarBlock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return(
      <List className="ScheduleList">
        <FlatButton style={{border: "2px solid #eee", height: "50px", width: "87%", marginLeft: "20px"}} labelStyle={{textTransform: "capitalize", color: "#3883F7", letterSpacing: "0.5px"}} label="Connect Google Calendar" />
        <ListItem className="ScheduleListItem" primaryText="Meeting with the board of directors" secondaryText="Jan 9, 2014" leftCheckbox={<Checkbox />} />
        <ListItem className="ScheduleListItem" primaryText="Meeting with the board of directors" secondaryText="Jan 9, 2014" leftCheckbox={<Checkbox />} />
        <ListItem className="ScheduleListItem" primaryText="Call with Paul" secondaryText="Jan 9, 2014" leftCheckbox={<Checkbox />} />
        <ListItem className="ScheduleListItem" primaryText="Interview with Developer Candidates" secondaryText="Jan 9, 2014" leftCheckbox={<Checkbox />}/>
      </List>
    );
  }
}

CalendarBlock.PropTypes = {
  index: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  };
};

export default connect(mapStateToProps, mapActionsToProps)(CalendarBlock);
