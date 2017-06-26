import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ClinicalMedicationListItem = ({ medication }) =>
  (<tr>
    <td>{medication.drug_name}</td>
    <td>{medication.drug_quantity}</td>
    <td>{medication.drug_frequency}</td>
    <td>{medication.actively_taking_flag === 'Y' ? 'Current' : 'No' }</td>
    <td>{moment(medication.created_at).format('MM/DD/YYYY')}</td>
    <td>{medication.created_by_type}</td>
  </tr>);

ClinicalMedicationListItem.propTypes = {
  medication: PropTypes.object.isRequired
};

export default ClinicalMedicationListItem;
