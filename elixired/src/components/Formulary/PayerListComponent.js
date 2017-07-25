import React from 'react';
import PropTypes from 'prop-types';

const PayerListComponent = ({ payers }) =>
  (
    <div className='wrapper'>
      {
        console.log(payers)
      }
    </div>
  );

const propTypes = {
  payers: PropTypes.array.isRequired
};

PayerListComponent.propTypes = propTypes;

export default PayerListComponent;
