import React from 'react';
import PropTypes from 'prop-types';

const FormularyStatusComponent = (props) => (
  <div className='wrapper'>
    <h3 className='section-header'
      onClick={props.onClick}>
      Formulary Status
      <div className={`toggle toggle-${props.toggled}`}
        onClick={props.onClick}>
        <span>&nbsp;</span>
      </div>
    </h3>

    <div style={props.style}>
      <p>Formulary Status: <span>{props.statusText}</span></p>
    </div>
  </div>
);

FormularyStatusComponent.propTypes = {
  statusText: PropTypes.string.isRequired,
  style:      PropTypes.object.isRequired,
  onClick:    PropTypes.func.isRequired,
  toggled:    PropTypes.bool
};

export default FormularyStatusComponent;
