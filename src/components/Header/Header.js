import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles';
import FlatButton from 'material-ui/FlatButton';
import SignInDialog from '../SignInDialog/SignInDialog';
import * as actions from '../../actions/AuthActions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';

import IconButton from 'material-ui/IconButton';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble-outline';
import NotificationsNone from 'material-ui/svg-icons/social/notifications-none';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      menu: false,
      companyValue: 1
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
  }

  handleOpen() {
    let state = Object.assign(this.state, {dialogOpen: true});
    this.setState(state);
  }

  handleClose() {
    this.setState({dialogOpen: false});
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      menu: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose() {
    this.setState({
      menu: false
    });
  }

  signOutButton() {
    return this.props.authenticate(false);
  }

  handleCompanyChange(event, index, value) { this.setState({companyValue: value}); }

  signInButton() {
    if(!this.props.authenticated) {
      return (
        <FlatButton
          label="Sign in or Sign up"
          primary={true}
          style={styles.SignInButton}
          onTouchTap={this.handleOpen}
          hoverColor={"rgb(250,250,250)"}
        />
      );
    }
    return (
      <div style={{marginTop: "0"}}>
        <div style={{display: "inline-block", lineHeight: "70px", top: "-8px"}}>
        <DropDownMenu
          style={{border: "none", top: "-7px"}}
          underlineStyle={{border: "none"}} className="CompanySelectMenu"  value={this.state.companyValue} onChange={this.handleCompanyChange}>
          <MenuItem className="CompanySelectMenuItem" value={1} primaryText={<div><span><img style={{height: "15px", marginRight: "10px"}} src="https://www.facebookbrand.com/img/fb-art.jpg"/></span> Facebook</div>} />
          <MenuItem className="CompanySelectMenuItem" value={2} primaryText={<div><span><img style={{height: "15px", marginRight: "10px"}} src="http://northdallasgazette.com/wordpress/wp-content/uploads/2016/05/Google-logo-2015-G-icon.png"/></span> Google</div>} />
          <MenuItem className="CompanySelectMenuItem" value={3} primaryText={<div><span><img style={{height: "15px", marginRight: "10px"}} src="http://www.bladecreativebranding.com/blog/wp-content/uploads/2014/11/New-2014-Air-Bnb-Logo.png"/></span> Airbnb</div>} />
        </DropDownMenu>
        </div>
        <div style={{display: "inline-block"}}>
          <Link to="/messages">
            <IconButton iconStyle={{fill: "#616C73"}}>
              <ChatBubble />
            </IconButton>
          </Link>
          <IconButton iconStyle={{fill: "#616C73"}}>
            <NotificationsNone />
          </IconButton>
        </div>
        <Popover
          open={this.state.menu}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem className="UserMenuItem" primaryText="Refresh" />
            <MenuItem className="UserMenuItem" primaryText="Help &amp; feedback" />
            <MenuItem className="UserMenuItem" primaryText="Settings" />
            <MenuItem className="UserMenuItem" primaryText="Sign out" onTouchTap={() => {this.signOutButton();}} />
          </Menu>
        </Popover>
        <FlatButton
          className="LoginButton"
          onTouchTap={this.handleTouchTap}
          children={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
          primary={true}
          style={styles.SignInButton}
          hoverColor={"white"}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <SignInDialog
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        />
        <AppBar
          style={styles.MainHeader}
          title={
            <div style={styles.LogoStyles}>
              <Link to="/"><img style={{height: "33px", marginTop: "17px"}} src={require("../../../src/images/logoMain.png")} /></Link>
            </div>
          }
          iconElementRight={
            <span>{this.signInButton()}</span>
          }
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

Header.propTypes = {
  authenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticate
  };
};

export default connect(mapStateToProps, actions)(Header);
