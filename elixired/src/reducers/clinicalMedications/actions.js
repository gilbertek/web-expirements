import {
  FETCH_CLINICAL_MEDICATIONS_SUCCESS,
  FETCH_CLINICAL_MEDICATIONS_ERROR
} from './constants';
import ClinicalMedicationApi from '../../api/mockClinicalMedications';

export const fetchClinicalMedicationsSuccess = (payload) => ({
  type: FETCH_CLINICAL_MEDICATIONS_SUCCESS,
  payload
});

export const fetchClinicalMedicationsError = (error) => ({
  type:    FETCH_CLINICAL_MEDICATIONS_ERROR,
  message: error.message || 'Something went wrong'
});

export function fetchClinicalMedications(memberId) {
  return dispatch => {
    return ClinicalMedicationApi.fetchClinicalMedications(memberId)
      .then(
        payload => dispatch(fetchClinicalMedicationsSuccess(payload)),
        error => dispatch(fetchClinicalMedicationsError(error))
      );
  };
}
