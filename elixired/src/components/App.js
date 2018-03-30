import React, { Component } from 'react';
import FilteredList from './User/FilteredList';
// import ClinicalMedicationForm from './ClinicalMedicationForm';
// import Formulary from './Formulary';

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' },
];

class App extends Component {
  render() {
    // const props = { memberId: 1, editMode: false };
    // const editprops = { memberId: 1, editMode: true };

    return (
      <div className="wrapper">
        <FilteredList side="dark" list={starWarsChars} />
      </div>
    );
  }
}

export default App;
