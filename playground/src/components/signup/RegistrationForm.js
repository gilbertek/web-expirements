import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

class RegistrationForm extends Component {
  state = {
    fullName: false,
    email: false,
    password: false
  };

  fieldStateChanged = field => state => {
    this.setState({
      [field]: state.errors.length === 0
    });
  };

  // state change watch functions for each field
  emailChanged = this.fieldStateChanged('email');
  fullnameChanged = this.fieldStateChanged('fullName');
  passwordChanged = this.fieldStateChanged('password');

  render() {
    const { fullName, email, password } = this.state;
    const formValidated = fullName && email && password;

    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
    const validateFullName = value => {
      const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
      if (!regex.test(value)) throw new Error('Fullname is invalid');
    };

    return (
      <div className="form-container d-table-cell position-relative align-middle">
        <form action="/" method="POST" noValidate />

        <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
          <legend className="form-label mb-0">Registration</legend>
          {/** Show the form button only if all fields are valid * */}
          {formValidated && (
            <button
              type="button"
              className="btn btn-primary text-uppercase px-3 py-2"
            >
              Join
            </button>
          )}
        </div>

        <div className="py-5 border-gray border-top border-bottom">
          {/** Render the fullname form field passing the name validation fn * */}
          <FormField
            type="text"
            fieldId="fullname"
            label="Fullname"
            placeholder="Enter Fullname"
            validator={validateFullName}
            onStateChanged={this.fullnameChanged}
            required
          />

          {/** Render the email field component * */}
          <EmailField
            fieldId="email"
            label="Email"
            placeholder="Enter Email Address"
            onStateChanged={this.emailChanged}
            required
          />

          {/** Render the password field component using thresholdLength of 7 and minStrength of 3 * */}
          <PasswordField
            fieldId="password"
            label="Password"
            placeholder="Enter Password"
            onStateChanged={this.passwordChanged}
            thresholdLength={7}
            minStrength={3}
            required
          />
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
