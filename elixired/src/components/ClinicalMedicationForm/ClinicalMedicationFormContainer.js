import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClinicalMedicationFormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <h1>Prescription</h1>
      </div>
    );
  }
}

ClinicalMedicationFormContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ClinicalMedicationFormContainer;
