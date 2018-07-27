import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ title, type = 'text', value = '', onChangeFunc, error, enableValidation = false }) => {
  const errorMessage = error && error[0];

  const validationClass = {
    group: enableValidation ? (error ? 'has-danger' : 'has-success') : '',
    control: enableValidation ? (error ? 'form-control-danger' : 'form-control-success') : ''
  };

  return (
    <div className={`form-group ${validationClass.group}`}>
      <label className='form-control-label'
        htmlFor={title}>{title}
      </label>

      <input type={type}
        className={`form-control ${validationClass.control}`}
        value={value}
        onChange={onChangeFunc} />
      {
        errorMessage && (
        <div>
          <small className='form-control-feedback'>{errorMessage}</small>
        </div>
        )
      }
    </div>
  );
};

FormField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['text', 'checkbox', 'password']),
  onChangeFunc: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.any,
  enableValidation: PropTypes.bool
};

export default FormField;
