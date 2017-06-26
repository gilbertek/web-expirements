import React from 'react';
import PropTypes from 'prop-types';

const PharmacyWrapper = ({ name, id }) =>
  (
    <div className='pharmacy-wrapper'>
      <p>Pharmacy: <span>{name}</span></p>
      <p>NCPDPID Number: <span>{id}</span></p>
    </div>
  );

PharmacyWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  id:   PropTypes.string.isRequired
};

export default PharmacyWrapper;
