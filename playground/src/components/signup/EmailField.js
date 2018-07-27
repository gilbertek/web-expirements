import React from 'react';
import PropTypes from 'prop-types';
import { validate } from 'isemail';
import FormField from './FormField';

const EmailField = props => {
  const { validator, ...restProps } = props;

  const validateEmail = value => {
    if (!validate(value)) {
      throw new Error('Email is invalid');
    }
  };

  return (
    <FormField type="text" validator={validateEmail} {...restProps} />
  );
};

EmailField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validator: PropTypes.func
};

export default EmailField;
