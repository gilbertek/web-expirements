import React from 'react';
import PropTypes from 'prop-types';

const MedicationWrapper = ({ qty, daysSupply, refills }) =>
  (
    <div className='medication-wrapper'>
      <p>Prescription Qty: <span>{qty}</span></p>
      <p>Days Supply: <span>{daysSupply}</span></p>
      <p>Refills: <span>{refills}</span></p>
    </div>
  );

MedicationWrapper.propTypes = {
  refills:    PropTypes.string.isRequired,
  qty:        PropTypes.string.isRequired,
  daysSupply: PropTypes.string.isRequired
};

export default MedicationWrapper;
