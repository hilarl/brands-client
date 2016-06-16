import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './CompanyHome.scss';
import {Line} from 'react-chartjs-2';
import {Polar} from 'react-chartjs-2';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import CalendarBlock from './components/CalendarBlock';

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) { this.setState({value})};
  index() {
    return null
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="container-fluid">
      <div style={{padding: 0}} className="CompanyDashboardWelcome col-md-6">
        <img style={{height: "50px"}} src="https://www.facebookbrand.com/img/fb-art.jpg" />
      </div>
      <div style={{padding: 0, textAlign: "right", marginTop: "-15px"}} className="col-md-6">
        <DropDownMenu className="CompanySelectMenu"  value={this.state.value} onChange={this.handleChange}>
          <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="https://www.facebookbrand.com/img/fb-art.jpg"/></span>} value={1} primaryText="Facebook" />
          <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="http://northdallasgazette.com/wordpress/wp-content/uploads/2016/05/Google-logo-2015-G-icon.png"/></span>} value={2} primaryText="Google" />
          <MenuItem className="CompanySelectMenuItem" children={<span><img style={{height: "20px", marginBottom: "-10px"}} src="http://www.bladecreativebranding.com/blog/wp-content/uploads/2014/11/New-2014-Air-Bnb-Logo.png"/></span>} value={3} primaryText="Airbnb" />
        </DropDownMenu>
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
            <Line data={data} />
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3 style={{marginBottom: "15px"}}>Talent Matches</h3>
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
          </div>
        </div>
        <div className="col-md-3 HomeBlock">
          <div className="HomeBlockInner">
            <h3>Brand Reach</h3>
            <Polar data={data2} />
          </div>
        </div>

      </div>
    );
  }
}

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Job Applicants Jan - Dec 2016',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(106,150,210,0.4)',
      borderColor: 'rgba(106,150,210,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(106,150,210,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(106,150,210,1)',
      pointHoverBorderColor: 'rgba(106,150,210,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

const data2 = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#F87186',
      '#5FD0B7',
      '#FFAA75',
      '#E7E9ED',
      '#6A96D2'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Engineers',
    'Business',
    'Marketing',
    'Sales',
    'HR'
  ]
};

CompanyHome.PropTypes = {
  index: PropTypes.array.isRequired
};

export default CompanyHome;
