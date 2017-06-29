import React, { Component } from 'React';
import ClinicalMedication from './ClinicalMedication';
import MedicationHistory from './MedicationHistory';
import MedicationHistoryReview from './MedicationHistoryReview';

class App extends Component {
  render() {
    const props = { memberId: 1, editMode: false };
    const editprops = { memberId: 1, editMode: true };

    return (
      <div className='wrapper'>
        <ClinicalMedication {...props} />
        <MedicationHistory {...props} />
        {/*<MedicationHistory {...editprops} />*/}
        <MedicationHistoryReview {...editprops} />
      </div>
    );
  }
}

export default App;
