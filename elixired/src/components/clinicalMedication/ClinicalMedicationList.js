import React from 'react';
import PropTypes from 'prop-types';
import ClinicalMedicationListItem from './ClinicalMedicationListItem';

const ClinicalMedicationList = ({ medicationList }) =>
  (
    <div className='medication-list'>
      <table className='table'>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Direction</th>
            <th>Status</th>
            <th>Reported Date</th>
            <th>Reported By</th>
          </tr>
        </thead>
        <tbody>
          {
            medicationList.length !== 0
            ? medicationList.map(medication =>
              <ClinicalMedicationListItem
                key={medication.clinical_medication_id}
                medication={medication}
              />)
            : <tr>
              <td>
                <p>There is no teladoc reported medication.</p>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );

const propTypes = {
  medicationList: PropTypes.array.isRequired
};

ClinicalMedicationList.propTypes = propTypes;

export default ClinicalMedicationList;
