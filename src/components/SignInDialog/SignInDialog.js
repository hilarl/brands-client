import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import styles from './styles';
import './SignInDialog.scss';
import SignInForm from './SignInForm';

class SignInDialog extends Component {
  render() {
    return (
      <Dialog {...this.props}
        contentStyle={styles.SignInDialogBody}
      >
        <div className="SignInDialogTitle">
          <img className="SignInDialogLogo" src={require("../../../src/images/logo.png")} />
          <h3>Companies</h3>
        </div>
        <div className="SignInDialogForm">
          <SignInForm />
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
