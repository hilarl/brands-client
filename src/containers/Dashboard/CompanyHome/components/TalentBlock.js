import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import '../CompanyHome.scss';
import * as calendarActions from '../../../../actions/CalendarActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TalentBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <List className="TalentMatchesList">
        <ListItem
          className="TalentMatchesItem"
          primaryText="Brendan Lim"
          secondaryText="Web Developer"
          leftAvatar={<Avatar className="TalentMatchesItemAvatar" src="http://www.material-ui.com/images/ok-128.jpg" />}
          rightIcon={<span>5.0</span>}
        />
        <ListItem
          className="TalentMatchesItem"
          primaryText="Eric Hoffman"
          secondaryText="Web Developer"
          leftAvatar={<Avatar className="TalentMatchesItemAvatar" src="http://www.material-ui.com/images/kolage-128.jpg" />}
          rightIcon={<span>5.0</span>}
        />
        <ListItem
          className="TalentMatchesItem"
          primaryText="Grace Ng"
          secondaryText="Web Developer"
          leftAvatar={<Avatar className="TalentMatchesItemAvatar" src="http://www.material-ui.com/images/uxceo-128.jpg" />}
          rightIcon={<span>5.0</span>}
        />
        <ListItem
          className="TalentMatchesItem"
          primaryText="Kerem Suer"
          secondaryText="Web Developer"
          leftAvatar={<Avatar className="TalentMatchesItemAvatar" src="http://www.material-ui.com/images/kerem-128.jpg" />}
          rightIcon={<span>5.0</span>}
        />
        <ListItem
          className="TalentMatchesItem"
          primaryText="Kerem Suer"
          secondaryText="Web Developer"
          leftAvatar={<Avatar className="TalentMatchesItemAvatar" src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
          rightIcon={<span>5.0</span>}
        />
      </List>
    );
  }
}

TalentBlock.PropTypes = {
  index: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TalentBlock);
