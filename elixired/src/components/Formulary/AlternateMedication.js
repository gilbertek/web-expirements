import React from 'react';
import PropTypes from 'prop-types';

const AlternateMedication = ({ medication }) => (
  <tr>
    <td>medication.drug_name</td>
  </tr>
);

AlternateMedication.propTypes = {
  medication: PropTypes.object.isRequired
};

export default AlternateMedication;
