import {
  FETCH_FORMULARY_SUCCESS,
  FETCH_FORMULARY_ERROR,
  FETCH_FORMULARY_REQUEST,

  SELECT_FORMULARY_MEDICATION_SUCCESS,
  SELECT_FORMULARY_MEDICATION_ERROR,

  SWITCH_FORMULARY_PBM_SUCCESS,
  SWITCH_FORMULARY_PGM_ERROR
} from './constants';

const DEFAULT_STATE = {
  formulary: {},
  fetched:   false,
  isLoading: false,
  message:   ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_FORMULARY_REQUEST: {
      return Object.assign({}, state, {
        fetched:   false,
        isLoading: true
      });
    }
    case FETCH_FORMULARY_SUCCESS: {
      return Object.assign({}, state, {
        fetched:   true,
        isLoading: false,
        response:  action.response ? action.response : {}
      });
    }
    case FETCH_FORMULARY_ERROR: {
      return Object.assign({}, state, {
        fetched:   false,
        isLoading: false
      });
    }

    default: {
      return state;
    }
  }
};
