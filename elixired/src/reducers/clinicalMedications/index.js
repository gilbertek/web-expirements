import {
  FETCH_CLINICAL_MEDICATIONS_SUCCESS,
  FETCH_CLINICAL_MEDICATIONS_ERROR
} from './constants';

const DEFAULT_STATE = {
  medication_history_records: [],
  fetched:                    false,
  isfetching:                 false,
  message:                    ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CLINICAL_MEDICATIONS_SUCCESS: {

      const data = action.payload.clinical_medications;
      return Object.assign({}, state, {
        fetched:              true,
        clinical_medications: data
      });
    }
    case FETCH_CLINICAL_MEDICATIONS_ERROR: {
      return Object.assign({}, state, {
        fetched: false,
        message: action.message
      });
    }
    default: {
      return state;
    }
  }
};
