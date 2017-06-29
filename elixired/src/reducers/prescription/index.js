import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_TITLE_SUCCESS,
  FETCH_DRUGS_BY_TITLE_ERROR,

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
      return state;
    }
    case FETCH_DRUGS_BY_TITLE_SUCCESS: {
      return state;
    }
    case FETCH_DRUGS_BY_TITLE_ERROR: {
      return state;
    }
    case FETCH_DRUGS_SUCCESS: {
      return state;
    }
    case FETCH_DRUGS_ERROR: {
      return state;
    }
    default: {
      return state;
    }
  }
};
