import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_NAME_SUCCESS,
  FETCH_DRUGS_BY_NAME_ERROR,

  FETCH_DRUGS_SUCCESS,
  FETCH_DRUGS_ERROR

  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN
} from './constants';

const DEFAULT_STATE = {
  drugs:       [],
  fetched:     false,
  isFetching:  false,
  message:     '',
  value:       '',
  suggestions: [],
  isLoading:   false
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
    case UPDATE_INPUT_VALUE: {
      return {
        ...state,
        value: action.value
      };
    }
    case CLEAR_SUGGESTIONS: {
      return {
        ...state,
        suggestions: []
      };
    }
    case LOAD_SUGGESTIONS_BEGIN: {
      return {
        ...state,
        isLoading: true
      };
    }
    case MAYBE_UPDATE_SUGGESTIONS: {
      // Ignore suggestions if input value changed
      if (action.value !== state.value) {
        return {
          ...state,
          isLoading: false
        };
      }
      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
