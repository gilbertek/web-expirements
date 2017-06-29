import {
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
