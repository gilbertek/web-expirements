import React, { Component } from 'React';
import ClinicalMedication from './clinicalMedication';
import MedicationHistory from './MedicationHistory';

class App extends Component {
  render() {
    const props = { memberId: 1, editMode: false };
    const editprops = { memberId: 1, editMode: true };

    return (
      <div className='wrapper'>
        <ClinicalMedication {...props} />
        <MedicationHistory {...props} />
        <MedicationHistory {...editprops} />
      </div>
    );
  }
}

export default App;
