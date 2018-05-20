import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import FormField from './FormField';

class PasswordField extends Component {
  constructor(props) {
    super(props);

    const { minStrength = 3, thresholdLength = 7 } = props;

    // set default minStrength to 3 if not a number or specified
    // minStrength must be a number between 0 - 4.
    this.minStrength =
      typeof minStrength === 'number'
        ? Math.max(Math.min(minStrength, 4), 0)
        : 3;

    // set default thresholdLength to 7 if not a number or specified.
    // thresholdLength must be a minimum value of 7
    this.thresholdLength =
      typeof thresholdLength === 'number' ? Math.max(thresholdLength, 7) : 7;

    this.state = {
      password: '',
      strength: 0
    };
  }

  stateChanged = state => {
    // Update the internal state using the updated state from the form field
    this.setState(
      {
        password: state.value,
        strength: zxcvbn(state.value).score
      },
      () => this.props.onStateChanged(state)
    );
  };

  validatePasswordStrength = value => {
    // ensure password is long enough
    if (value.length <= this.thresholdLength) {
      throw new Error('Password is too short');
    }

    if (zxcvbn(value).score < this.minStrength) {
      throw new Error('Password is weak');
    }
  };

  render() {
    const {
      type,
      validator,
      onStateChanged,
      children,
      ...restProps
    } = this.props;
    const { password, strength } = this.state;
    const passwordLength = password.length;
    const passwordStrength = strength >= this.minStrength;
    const passwordLong = passwordLength > this.thresholdLength;

    // dynamically set the password length counter class
    const counterClass = [
      'badge badge-pill',
      passwordLong
        ? passwordStrength
          ? 'badge-success'
          : 'badge-warning'
        : 'badge-dander'
    ]
      .join(' ')
      .trim();

    // password strength meter is only visible when password is not empty
    const strengthClass = [
      'strength-meter mt-2',
      passwordLength > 0 ? 'visible' : 'invisible'
    ]
      .join(' ')
      .trim();

    return (
      <Fragment>
        <div className="position-relative">
          <FormField
            type="password"
            validator={this.validatePasswordStrength}
            onStateChanged={this.stateChanged}
            {...restProps}>
            <span className="d-block form-hint">
              To conform with our Strong Password policy, you are required to
              use a sufficiently strong password. Password must be more than 7
              characters.
            </span>
            {children}

            {/** Render the password strength meter **/}
            <div className={strengthClass}>
              <div className="strength-meter-fill" data-strength={strength} />
            </div>
          </FormField>
          <div className="position-absolute password-count mx-3">
            {/** Render the password length counter indicator **/}
            <span className={counterClass}>
              {passwordLength
                ? passwordLong
                  ? `${this.thresholdLength}+`
                  : passwordLength
                : ''}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  onStateChanged: PropTypes.func,
  minStrength: PropTypes.number,
  thresholdLength: PropTypes.number
};

export default PasswordField;
