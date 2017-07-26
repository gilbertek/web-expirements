import React from 'react';
import PropTypes from 'prop-types';
import AlternateMedication from './AlternateMedication';

const AlternateMedicationList = ({ altMeds }) => (
  <div className='wrapper'>
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Strength</th>
          <th>Dose Form</th>
          <th>Route</th>
          <th>Generic/Brand</th>
          <th>OTC/Prescription</th>
          <th>Copay Amount</th>
          <th>Formulary Status</th>
        </tr>
      </thead>
      <tbody>
        {
          altMeds.length !== 0
          ? altMeds.map(medication =>
              <AlternateMedication
                key={medication.ndc}
                medication={medication.drug_details}
              />)
          : <tr>
              <td>
                <p>There is no alternative medication.</p>
              </td>
            </tr>
        }
      </tbody>
    </table>
  </div>
);

AlternateMedicationList.propTypes = {
  altMeds: PropTypes.array.isRequired
};

export default AlternateMedicationList;
