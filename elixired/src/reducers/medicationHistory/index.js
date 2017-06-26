import {
  FETCH_MEDICATION_HISTORY_SUCCESS,
  FETCH_MEDICATION_HISTORY_ERROR,
  UPDATE_MEDICATION_HISTORY_SUCCESS,
  UPDATE_MEDICATION_HISTORY_ERROR
} from './constants';

const DEFAULT_STATE = {
  medicationRecords: {},
  fetched:           false,
  message:           ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_MEDICATION_HISTORY_SUCCESS: {
      const medicationRecords = action.payload.Message.Body.RxHistoryResponse;
      return {
        ...state,
        fetched: true,
        medicationRecords
      };
    }
    case FETCH_MEDICATION_HISTORY_ERROR: {
      return {
        ...state,
        fetched: false,
        message: action.message
      };
    }
    case UPDATE_MEDICATION_HISTORY_SUCCESS: {
      const medicationRecords = state.medicationRecords;
      if (medicationRecords &&
          medicationRecords.MedicationDispensed &&
          medicationRecords.MedicationDispensed.length > 1) {
        const meds = medicationRecords.MedicationDispensed.filter(med =>
          med.DrugDescription !== action.payload.DrugDescription
        );
        medicationRecords.MedicationDispensed = meds;
      }
      return {
        fetched:           true,
        medicationRecords: Object.assign({}, medicationRecords)
      };
    }
    case UPDATE_MEDICATION_HISTORY_ERROR:
      return {
        ...state,
        fetched: false,
        message: action.message
      };
    default: {
      return state;
    }
  }
};
