import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './CompanyHome.scss';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import CalendarBlock from './components/CalendarBlock';
import TalentBlock from './components/TalentBlock';
import TalentChartBlock from './components/TalentChartBlock';
import BrandChartBlock from './components/BrandChartBlock';

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) { this.setState({value})};
  index() {
    return null
  }

  render() {
    return (
      <div className="container-fluid CompaniesMainNav">
        <div className="container-fluid">
          <div style={{padding: 0}} className="CompanyDashboardWelcome col-md-6">
            <img style={{height: "50px"}} src="https://www.facebookbrand.com/img/fb-art.jpg" />
          </div>
          <div style={{padding: 0, textAlign: "right", marginTop: "-5px"}} className="col-md-6">
            <DropDownMenu style={{border: "none"}} className="CompanySelectMenu"  value={this.state.value} onChange={this.handleChange}>
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
      </div>
    );
  }
}

CompanyHome.PropTypes = {
  index: PropTypes.array.isRequired
};

export default CompanyHome;
