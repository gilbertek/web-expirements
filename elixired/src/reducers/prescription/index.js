import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_NAME_SUCCESS,
  FETCH_DRUGS_BY_NAME_ERROR,

  FETCH_DRUGS_SUCCESS,
  FETCH_DRUGS_ERROR
} from './constants';

const DEFAULT_STATE = {
  drugs:      [],
  fetched:    false,
  isFetching: false,
  message:    ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_DRUGS_REQUEST: {
      return Object.assign({}, state, {
        fetched: false,
        isFetching: true
      });
    }
    case FETCH_DRUGS_BY_NAME_SUCCESS: {
      return Object.assign({}, state, {
        fetched:    true,
        isFetching: false,
        drugs: action.response ? action.response : []
      });
    }
    case FETCH_DRUGS_BY_NAME_ERROR: {
      return Object.assign({}, state, {
        fetched:    false,
        isFetching: false
      });
    }
    case FETCH_DRUGS_SUCCESS: {
      const drugs = action.response;
      return Object.assign({}, state, {
        fetched: true,
        isFetching: false,
        drugs
      });
    }
    case FETCH_DRUGS_ERROR: {
      return Object.assign({}, state, {
        fetched:    false,
        isFetching: false,
        message:    action.message
      });
    }
    default: {
      return state;
    }
  }
};