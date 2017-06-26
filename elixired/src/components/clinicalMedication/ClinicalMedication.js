import React from 'react';
import PropTypes from 'prop-types';
import ClinicalMedicationList from './ClinicalMedicationList';
import FetchApiError from '../Shared/FetchApiError';

const ClinicalMedication = ({ fetched, clinicalMedications, errorMessage }) => {
  if (errorMessage) {
    return (
      <div className='clinical-medication-list'>
        <FetchApiError message={errorMessage} />
      </div>
    );
  }

  return (
    <div className='clinical-medication-list'>
      {
        fetched &&
        <ClinicalMedicationList
          medicationList={clinicalMedications}
        />
      }
    </div>
  );
};

//   constructor(props) {
//     super(props);

//     this.state = {
//       fetched:              false,
//       clinical_medications: []
//     };
//   }

//   componentDidMount() {
//     this.props.fetchClinicalMedications(this.props.memberId);
//   }

//   render() {
//     const { fetched, clinicalMedications, errorMessage } = this.props;

//     if (errorMessage) {
//       return (
//         <div className='clinical-medication-list'>
//           <FetchApiError message={errorMessage} />
//         </div>
//       );
//     }

//     return (
//       <div className='clinical-medication-list'>
//         {
//           fetched &&
//           <ClinicalMedicationList
//             medicationList={clinicalMedications}
//           />
//         }
//       </div>
//     );
//   }
// }

ClinicalMedication.propTypes = {
  fetched:                  PropTypes.bool,
  memberId:                 PropTypes.number.isRequired,
  clinicalMedications:      PropTypes.array,
  fetchClinicalMedications: PropTypes.func,
  errorMessage:             PropTypes.string
};

export default ClinicalMedication;
