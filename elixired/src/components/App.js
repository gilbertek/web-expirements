import React, { Component } from 'React';
import ClinicalMedication from './ClinicalMedication';
import ClinicalMedicationForm from './ClinicalMedicationForm';
import MedicationHistory from './MedicationHistory';
import Prescription from './Prescription';
import MedicationHistoryReview from './MedicationHistoryReview';
import Formulary from './Formulary'


class App extends Component {
  render() {
    const props = { memberId: 1, editMode: false };
    const editprops = { memberId: 1, editMode: true };

    return (
      <div className='wrapper'>
        {/* <ClinicalMedication {...props} /> */}
        <br />
        <br />
        <ClinicalMedicationForm />
        <br />
        <br />
        {/* <MedicationHistory {...props} /> */}
        <br />
        <br />
        <br />
        {/*<Prescription /> */}

        <br />
        {/*<Formulary drugName={`crestor`} /> */}
      </div>
    );
  }
}

export default App;
