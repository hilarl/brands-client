import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../../actions/AuthActions';
import styles from './styles';
import { Router, browserHistory } from 'react-router';
import './SignInForm.scss';

class SignInForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: "",
      socialForm: true,
      emailForm: false
    }
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.signInForm = this.signInForm.bind(this);
  }

  emailOnChange(event) {
    console.log(this.state.email);
    this.setState({ email: event.target.value });
  }

  passwordOnChange(event) {
    console.log(this.state.password);
    this.setState({ password: event.target.value });
  }

  signInForm() {
    if(this.state.socialForm) {
      return(
        <div style={{marginTop: "30px"}}>
          <FlatButton
            label="Login with Facebook"
            rippleColor={styles.SubmitButton.rippleColor}
            style={styles.facebookButton}
            labelStyle={styles.buttonStyles}
          />
          <FlatButton
            label="Login with Twitter"
            rippleColor={styles.SubmitButton.rippleColor}
            style={styles.twitterButton}
            labelStyle={styles.buttonStyles}
          />
          <FlatButton
            label="Login with Google"
            className="ButtonStyle"
            rippleColor={styles.SubmitButton.rippleColor}
            style={styles.googleButton}
            labelStyle={styles.buttonStyles}
          />
          <div className="SignInDialogFooter">
            <a className="SignInDialogFooterLink"
              onClick={()=> {
                this.setState({socialForm: false});
                this.setState({emailForm: true});
              }}
              href="#">Sign in or sign up with email</a>
          </div>
        </div>
      )
    }
    if(this.state.emailForm) {
      return(
        <div style={{marginTop: "15px"}}>
          <TextField
            floatingLabelText="Email Address"
            fullWidth={true}
            floatingLabelFocusStyle={styles.SignInInput.floatingLabelFocusStyle}
            underlineFocusStyle={styles.SignInInput.underlineStyle}
            onChange={this.emailOnChange}
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth={true}
            floatingLabelFocusStyle={styles.SignInInput.floatingLabelFocusStyle}
            underlineFocusStyle={styles.SignInInput.underlineStyle}
            onChange={this.passwordOnChange}
          />
          <FlatButton
            label="Sign in"
            rippleColor={styles.SubmitButton.rippleColor}
            style={styles.SubmitButton}
            labelStyle={styles.buttonStyles}
            onClick={()=> {
              console.log(this.props.return)
              this.props.authenticate(true);
              browserHistory.push('/home/');
            }}
          />
          <div className="SignInDialogFooter">
            <a className="SignInDialogFooterLink"
              href="#">Forgot password?</a>
              <a className="SignInDialogFooterLink"
                onClick={()=> {
                  this.setState({socialForm: true});
                  this.setState({emailForm: false});
                }}
                href="#">Or sign in with facebook, twitter or google</a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <form>
        {this.signInForm()}
      </form>
    );
  }
}

SignInForm.propTypes = {
  //myProp: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.authenticate
  };
}

export default connect(mapStateToProps, actions)(SignInForm);
