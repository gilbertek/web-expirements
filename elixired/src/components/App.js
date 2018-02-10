import React, { Component } from 'React';
import ClinicalMedicationForm from './ClinicalMedicationForm';
import Formulary from './Formulary';


class App extends Component {
  render() {
    // const props = { memberId: 1, editMode: false };
    // const editprops = { memberId: 1, editMode: true };

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
        <Formulary drugName={`crestor`} />
      </div>
    );
  }
}

export default App;
