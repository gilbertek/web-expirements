import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../Shared/TextInput';
import SelectInput from '../Shared/SelectInput';

const ClinicalMedicationForm = (props) => {
  console.log('Current Props', props);
  const {
  medication,
  directionList,
  statusList,
  onSave,
  onChange,
  isSaving,
  errors
} = props;

  return (
    <form className='course-form'>
      <h1>New Medication</h1>

      <TextInput
        name='medication'
        label='Medication'
        onChange={onChange}
        value={medication.name}
        error={errors.name}/>

      <TextInput
        name='dosage'
        label='Dosage'
        onChange={onChange}
        value={medication.dosage}
        error={errors.dosage}/>

      <SelectInput
        name='direction'
        label='Directions'
        value={medication.direction}
        defaultOption='Select one...'
        options={directionList}
        onChange={onChange}
        error={errors.direction} />

      <SelectInput
        name='status'
        label='Status'
        value={medication.status}
        defaultOption='Select one...'
        options={statusList}
        onChange={onChange}
        error={errors.status} />

      <input
        type='submit'
        disabled={isSaving}
        value={isSaving ? 'Saving' : 'Add Medication'}
        className='btn btn-primary'
        onClick={onSave} />
    </form>
  );
};

ClinicalMedicationForm.propTypes = {
  medication:    PropTypes.object.isRequired,
  directionList: PropTypes.array,
  statusList:    PropTypes.array,
  onSave:        PropTypes.func.isRequired,
  onChange:      PropTypes.func.isRequired,
  isSaving:      PropTypes.bool,
  errors:        PropTypes.object
};

export default ClinicalMedicationForm;
