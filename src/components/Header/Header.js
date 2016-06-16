import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles';
import FlatButton from 'material-ui/FlatButton';
import SignInDialog from '../SignInDialog/SignInDialog';
import * as actions from '../../actions/AuthActions';
import { connect } from 'react-redux';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menu: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      menu: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      menu: false,
    });
  };

  signOutButton() {
    console.log("signed out");
    return this.props.authenticate(false);
  }

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
      <div>
        <Popover
          open={this.state.menu}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" onTouchTap={() => {this.signOutButton()}} />
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
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
        <AppBar
          style={styles.MainHeader}
          title={
            <div style={styles.LogoStyles}>
              <img style={{height: "33px", marginTop: "17px"}} src={require("../../../src/images/logoMain.png")} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.authenticate
  };
}

export default connect(mapStateToProps, actions)(Header);
