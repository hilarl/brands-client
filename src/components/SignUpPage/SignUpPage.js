import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SignUpPageStyles from './styles.js';

const SignUpPage = (props) => {
  return (
    <div className="col-md-4 col-md-offset-4" style={{marginTop: "30px"}}>
      <h1 style={SignUpPageStyles.SignUpHeading}>Sign Up</h1>
      <form>
        <TextField
          floatingLabelText="First Name"
          fullWidth={true}
          floatingLabelFocusStyle={SignUpPageStyles.SignUpInput.floatingLabelFocusStyle}
          underlineFocusStyle={SignUpPageStyles.SignUpInput.underlineStyle}
        />
        <TextField
          floatingLabelText="Last Name"
          fullWidth={true}
          floatingLabelFocusStyle={SignUpPageStyles.SignUpInput.floatingLabelFocusStyle}
          underlineFocusStyle={SignUpPageStyles.SignUpInput.underlineStyle}
        />
        <TextField
          floatingLabelText="Email"
          fullWidth={true}
          floatingLabelFocusStyle={SignUpPageStyles.SignUpInput.floatingLabelFocusStyle}
          underlineFocusStyle={SignUpPageStyles.SignUpInput.underlineStyle}
        />
        <TextField
          floatingLabelText="Password"
          fullWidth={true}
          type="password"
          floatingLabelFocusStyle={SignUpPageStyles.SignUpInput.floatingLabelFocusStyle}
          underlineFocusStyle={SignUpPageStyles.SignUpInput.underlineStyle}
        />
        <TextField
          floatingLabelText="Repeat Password"
          fullWidth={true}
          type="password"
          floatingLabelFocusStyle={SignUpPageStyles.SignUpInput.floatingLabelFocusStyle}
          underlineFocusStyle={SignUpPageStyles.SignUpInput.underlineStyle}
        />
        <FlatButton backgroundColor="#6A96D2" style={SignUpPageStyles.SignUpButton} label="Sign up" />
      </form>
    </div>
  );
}

export default SignUpPage;
