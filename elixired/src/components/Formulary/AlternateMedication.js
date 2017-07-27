import React from 'react';
import PropTypes from 'prop-types';
import { GenericDrug } from '../../lib/FormularyDrug';

const AlternateMedication = ({ medication }) => {
  const med = new GenericDrug(medication);

  return (
    <tr>
      <td>
        {med.getName()}
      </td>
      <td>
        {med.getStrength()}
      </td>
      <td>
        {med.getDoseForm()}
      </td>
      <td>
        {med.getRoute()}
      </td>
      <td>
        {med.getBrandType()}
      </td>
      <td>
        {med.getPrescriptionType()}
      </td>
      <td>
        {med.getCopayAmount()}
      </td>
      <td>
        {med.getFormularyStatus()}
      </td>
    </tr>
  );
};

AlternateMedication.propTypes = {
  medication: PropTypes.object.isRequired
};

export default AlternateMedication;
