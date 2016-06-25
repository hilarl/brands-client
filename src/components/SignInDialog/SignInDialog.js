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
        autoDetectWindowHeight={false}
        autoScrollBodyContent={false}
      >
        <div className="SignInDialogTitle">
          <img className="SignInDialogLogo" src={require("../../../src/images/logo.png")} />
          <h3>Companies</h3>
        </div>
        <div className="SignInDialogForm">
          <SignInForm />
        </div>
      </Dialog>
    );
  }
}

export default SignInDialog;
