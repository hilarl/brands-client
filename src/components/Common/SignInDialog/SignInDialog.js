import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import styles from './styles';
import './SignInDialog.scss';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SignInDialog extends Component {
  render() {
    return (
      <Dialog {...this.props}
        contentStyle={styles.SignInDialogBody}
      >
        <div className="SignInDialogTitle">
          <img className="SignInDialogLogo" src="../../../../images/logo.png" />
          <h3>Companies</h3>
        </div>
        <div className="SignInDialogForm">
          <form>
            <TextField
              floatingLabelText="Email Address"
              fullWidth={true}
              floatingLabelFocusStyle={styles.SignInInput.floatingLabelFocusStyle}
              underlineFocusStyle={styles.SignInInput.underlineStyle}
            />
            <TextField
              floatingLabelText="Password"
              type="password"
              fullWidth={true}
              floatingLabelFocusStyle={styles.SignInInput.floatingLabelFocusStyle}
              underlineFocusStyle={styles.SignInInput.underlineStyle}
            />
            <FlatButton
              label="Sign in"
              rippleColor={styles.SubmitButton.rippleColor}
              style={styles.SubmitButton}
            />
          </form>
        </div>
        <div className="SignInDialogFooter">
          <a className="SignInDialogFooterLink" href="#">Don't have an account yet?</a>
          <a className="SignInDialogFooterLink" href="#">Forgot password?</a>
        </div>
      </Dialog>
    );
  }
}

export default SignInDialog;
