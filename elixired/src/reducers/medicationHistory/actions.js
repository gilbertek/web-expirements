import MedicationHistoryApi from '../../api/mockMedicationHistory';

import {
  FETCH_MEDICATION_HISTORY_SUCCESS,
  FETCH_MEDICATION_HISTORY_ERROR,
  UPDATE_MEDICATION_HISTORY_SUCCESS,
  UPDATE_MEDICATION_HISTORY_ERROR
} from './constants';

export const fetchMedicationHistorySuccess = (response) => ({
  type:    FETCH_MEDICATION_HISTORY_SUCCESS,
  payload: response
});

export const fetchMedicationHistoryError = (error) => ({
  type:    FETCH_MEDICATION_HISTORY_ERROR,
  message: error.message || 'Something went wrong'
});

export const updateMedicationHistorySuccess = (response) => ({
  type:    UPDATE_MEDICATION_HISTORY_SUCCESS,
  payload: response
});

export const updateMedicationHistoryError = (error) => ({
  type:    UPDATE_MEDICATION_HISTORY_ERROR,
  message: error.message || 'Something went wrong'
});

const fetchMedicationHistoryRecords = (memberId) => {
  return (dispatch) => {
    return (
      MedicationHistoryApi.fetchMedicationHistoryRecords(memberId)
        .then(
          response => dispatch(fetchMedicationHistorySuccess(response)),
          error => dispatch(fetchMedicationHistoryError(error))
        )
        .catch(error => { throw new Error(error); })
    );
  };
};

const updateMedicationList = (medication) => {
  return (dispatch) => {
    return deleteMedication(medication)
      .then(
        response => dispatch(updateMedicationHistorySuccess(response)),
        error => dispatch(updateMedicationHistoryError(error)))
      .catch(error => { throw new Error(error); });
  };
};

function deleteMedication(medication) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject('Simulation random failure');
      }
      resolve(medication);
    }, 1000);
  });
}

export {
  fetchMedicationHistoryRecords,
  updateMedicationList
};
