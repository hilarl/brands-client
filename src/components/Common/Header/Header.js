import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles';
import FlatButton from 'material-ui/FlatButton';
import SignInDialog from '../SignInDialog/SignInDialog';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
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
            <div style={styles.LogoStyles}>Squelo</div>
          }
          iconElementRight={
            <FlatButton
              label="Sign in or Sign up"
              primary={true}
              style={styles.SignInButton}
              onTouchTap={this.handleOpen}
              hoverColor={"rgb(250,250,250)"}
            />
          }
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

export default Header;
