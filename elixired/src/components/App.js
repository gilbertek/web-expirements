import React, { Component } from 'React';
import ClinicalMedication from './ClinicalMedication';
import ClinicalMedicationForm from './ClinicalMedicationForm';
import MedicationHistory from './MedicationHistory';
import MedicationHistoryReview from './MedicationHistoryReview';

class App extends Component {
  render() {
    const props = { memberId: 1, editMode: false };
    const editprops = { memberId: 1, editMode: true };

    return (
      <div className='wrapper'>
        <ClinicalMedication {...props} />
        <br />
        <br />
        <MedicationHistory {...props} />
        {/*<MedicationHistory {...editprops} />*/}
        <br />
        <br />

        <MedicationHistoryReview {...editprops} />
        <br />
        <br />
        <ClinicalMedicationForm />
      </div>
    );
  }
}

export default App;
