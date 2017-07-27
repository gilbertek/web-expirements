import React from 'react';
import PropTypes from 'prop-types';
import AlternateMedication from './AlternateMedication';

const AlternateMedicationList = ({ altMeds, style, toggled, onClick }) => (
  <div className='wrapper'>
    <h3 className='section-header'
      onClick={onClick}>
      Coverage Information
      <div className={`toggle toggle-${toggled}`}
        onClick={onClick}>
        <span>&nbsp;</span>
      </div>
    </h3>

    <table className='table'
      style={style}>
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
  altMeds: PropTypes.array.isRequired,
  style:   PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

export default AlternateMedicationList;
