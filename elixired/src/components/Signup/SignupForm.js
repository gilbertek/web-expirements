import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from './FormContainer';
import FormField from './FormField';
import TextArea from './TextArea';

class SignupForm extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.fillForm);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.fillForm);
  }

  onSignup = (event) => {
    event.preventDefault();

    const data = this.getFormData();
    this.props.onSignup(data);
  };

  setField = (field, value) => {
    const state = this.getFormData();

    state[field] = value;
    this.props.onFieldChange(field, value, state);
  };

  setUserName = event => this.setField('username', event.target.value);
  setPassword = event => this.setField('password', event.target.value);
  setFirstName = event => this.setField('firstName', event.target.value);
  setLastName = event => this.setField('lastName', event.target.value);
  setEmail = event => this.setField('email', event.target.value);
  setBio = event => this.setField('bio', event.target.value);

  fillForm = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    if (event.target.tagName.toLowerCase() === 'input') {
      return;
    }

    this.setField('username', 'obikenobi');
    this.setField('password', 'pwd123');
    this.setField('firstName', 'Obi-wan');
    this.setField('lastName', 'Kenobi');
    this.setField('email', 'obiekenobi@starwars.com');
    this.setField('bio', 'Consectetur incidunt tenetur quibusdam quae laudantium!');
  };

  render() {
    const {
      profile: {
        username,
        firstName,
        lastName,
        password,
        email,
        bio,
        touched,
      },
      validation,
      formSubmit,
      onCancel
    } = this.props;

    const signupLabel = formSubmit.pending ? 'Signing up...' : 'Sign up';
    const error = validation.error || {};

    return (
      <FormContainer>
        {
          formSubmit.failed
            ? (
                <div className='alert alert-danger'>
                  <strong>Oops</strong>, something went wrong. Please try again.
                </div>
              )
            : null
        }

        <small className='float-right'>{validation.pending ? 'Validating...' : ''}</small>

        <FormField
          title={`Pick a username`}
          value={username}
          onChange={this.setUserName}
          enableValidation={touched}
          error={!validation.valid && error.username} />

        <FormField title='Pick a strong password'
          type='password'
          value={password}
          onChange={this.setPassword}
          enableValidation={touched}
          error={!validation.valid && error.password} />

        <div className='row'>
          <div className='col'>
            <FormField title='First Name'
              value={firstName}
              onChange={this.setFirstName}
              enableValidation={touched}
              error={!validation.valid && error.firstName} />

          </div>
          <div className='col'>
            <FormField title='Last Name'
              value={lastName}
              onChange={this.setLastName}
              enableValidation={touched}
              error={!validation.valid && error.lastName} />

          </div>
        </div>

        <FormField
          title='Email'
          value={email}
          onChange={this.setEmail}
          enableValidation={touched}
          error={!validation.valid && error.email} />

        <TextArea
          title='Bio'
          value={bio}
          onChange={this.setBio}
          enableValidation={touched}
          error={!validation.valid && error.bio} />

        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary btn-lg'
              onClick={this.onSignup}
              disabled={!validation.valid || formSubmit.pending}
            >{signupLabel}
            </button>
            <button
              className='btn btn-link'
              onClick={onCancel}
            >Not now</button>
          </div>
        </div>
      </FormContainer>
    );
  }
}

SignupForm.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  validation: PropTypes.object.isRequired,
  formSubmit: PropTypes.object.isRequired,
  onSignup: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default SignupForm;
