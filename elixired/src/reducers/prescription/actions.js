import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_NAME_SUCCESS,
  FETCH_DRUGS_BY_NAME_ERROR,

  FETCH_DRUGS_SUCCESS,
  FETCH_DRUGS_ERROR,

  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN
} from './constants';
import {
  randomDelay,
  escapeRegexCharacters
} from '../../lib/Utils';
import DrugsApi from '../../api/mockDrug';

export const fetchDrugsRequest = () => ({
    type: FETCH_DRUGS_REQUEST
});

export const fetchDrugsByNameSuccess = (response) => ({
    type: FETCH_DRUGS_BY_NAME_SUCCESS,
    response
});

export const fetchDrugsByNameError = (error) => ({
    type:    FETCH_DRUGS_BY_NAME_ERROR,
    message: error.message || 'Something went wrong'
});

export const fetchDrugsSuccess = (response) => ({
    type: FETCH_DRUGS_SUCCESS,
    response
});

export const fetchDrugsError = (error) => ({
    type:    FETCH_DRUGS_ERROR,
    message: error.message || 'Something went wrong'
});

// Autosuggest actions
export const updateInputValue = (value) => ({
  type: UPDATE_INPUT_VALUE,
  value
});

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});

export const loadSuggestionsBegin = () => ({
  type: LOAD_SUGGESTIONS_BEGIN
});

export const maybeUpdateSuggestions = (suggestions, value) => ({
  type: MAYBE_UPDATE_SUGGESTIONS,
  suggestions,
  value
});

export const fetchDrugsByName = (query) => {
  return (dispatch) => {
    dispatch(fetchDrugsRequest());
    return DrugsApi.fetchDrugsByName(query)
      .then(
        response => dispatch(fetchDrugsByNameSuccess(response)),
        error => dispatch(fetchDrugsByNameError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};

export const fetchDrugs = () => {
  return (dispatch) => {
    dispatch(fetchDrugsRequest());
    return DrugsApi.fetchDrugs()
      .then(
        response => dispatch(fetchDrugsSuccess(response)),
        error => dispatch(fetchDrugsError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};

export const loadSuggestions = (value) => {
  return (dispatch) => {
    dispatch(loadSuggestionsBegin());

    // Fake an AJAX call
    setTimeout(() => {
      dispatch(maybeUpdateSuggestions(getMatchingLanguages(value), value));
    }, randomDelay());
  };
};

function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^  ${escapedValue} i`);
  return languages.filter(language => regex.test(language.name));
}

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  }
];
