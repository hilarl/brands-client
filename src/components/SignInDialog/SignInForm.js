import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../../actions/AuthActions';
import styles from './styles';
import { Router, browserHistory } from 'react-router';

class SignInForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: ""
    }
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
  }

  emailOnChange(event) {
    console.log(this.state.email);
    this.setState({ email: event.target.value });
  }

  passwordOnChange(event) {
    console.log(this.state.password);
    this.setState({ password: event.target.value });
  }

  authButton() {
    return (
      <FlatButton
        label="Sign in"
        rippleColor={styles.SubmitButton.rippleColor}
        style={styles.SubmitButton}
        onClick={()=> {
          this.props.authenticate(true);
          browserHistory.push('/home');
        }}
      />
    )
  }

  render() {
    return (
      <form>
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
        {this.authButton()}
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
