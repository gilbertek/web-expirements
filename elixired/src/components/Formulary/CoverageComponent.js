import React from 'react';
import PropTypes from 'prop-types';

const CoverageComponent = ({ plan, toggled, style, onClick }) => (
  <div className='wrapper'>
    <h3 className='section-header'
      onClick={onClick}>
      Coverage Information
      <div className={`toggle toggle-${toggled}`}
        onClick={onClick}>
        <span>&nbsp;</span>
      </div>
    </h3>

    <div style={style}>
      <p><strong>Message:</strong> Prompty report...</p>
    </div>
  </div>
);

CoverageComponent.propTypes = {
  plan:    PropTypes.object.isRequired,
  style:   PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

export default CoverageComponent;
