import React from 'react';
import PropTypes from 'prop-types';

const FetchApiError = ({ message }) =>
  (
    <div>
      <p>Could not process request. {message}</p>
    </div>
  );

FetchApiError.propTypes = {
  message: PropTypes.string.isRequired
};

export default FetchApiError;
