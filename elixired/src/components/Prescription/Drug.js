import React from 'react';
import PropTypes from 'prop-types';

const Drug = (props) => {
  const { DrugName } = props;

  return (
    <div className={`row`}
      style={{ 'border': '1px solid #ccc' }}>
      <p>{DrugName}</p>
    </div>
  );
};

Drug.propTypes = {
  BrandCode:   PropTypes.string.isRequired,
  CSA:         PropTypes.object.isRequired,
  Category:    PropTypes.string.isRequired,
  DrugID:      PropTypes.string.isRequired,
  DrugName:    PropTypes.string.isRequired,
  GenericID:   PropTypes.string.isRequired,
  SampleNDC:   PropTypes.string.isRequired,
  Specificity: PropTypes.string.isRequired
};

export default Drug;
