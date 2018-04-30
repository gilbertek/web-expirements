import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ title, value = '', onChangeFunc, error, enableValidation = false }) => {
  const errorMessage = error && error[0];

  const validationClass = {
    group: enableValidation ? (error ? 'has-danger' : 'has-success') : '',
    control: enableValidation ? (error ? 'form-control-danger' : 'form-control-success') : ''
  };

  return (
    <div className={`form-group ${validationClass.group}`}>
      <label className='form-control-label'
        htmlFor={title}>
        {title}
      </label>

      <textarea value={value}
        onChange={onChangeFunc} />
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  onChangeFunc: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.any,
  enableValidation: PropTypes.bool
};

export default TextArea;
