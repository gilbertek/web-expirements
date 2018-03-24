import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ExpendableForm = ({ expanded = false, onSubmit, onExpand, children }) => {
  const formStyle = expanded ? { height: 'auto' } : { height: 0 };
  return (
    <form style={formStyle} onSubmit={onSubmit}>
      {children}

      <button onClick={onExpand}>Expand</button>
    </form>
  );
};

ExpendableForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
};

export default ExpendableForm;
