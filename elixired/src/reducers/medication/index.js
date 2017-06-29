import {
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN
} from './constants';

const DEFAULT_STATE = {
  drugs:       [],
  fetched:     false,
  message:     '',
  value:       '',
  suggestions: [],
  isLoading:   false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
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
