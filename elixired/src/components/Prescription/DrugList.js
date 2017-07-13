import React from 'react';
import PropTypes from 'prop-types';
import Drug from './Drug';

const DrugList = ({ drugs }) => {
  return (
    <div className='row'>
      {
        drugs.length !== 0
        ? drugs
          .map(
            (drug, index) =>
              <Drug key={index}
                {...drug} />
            )
        : <p style={{ width: '100%' }}>No drugs to display.</p>
      }
    </div>
  );
};

DrugList.propTypes = {
  drugs: PropTypes.array.isRequired
};

export default DrugList;
