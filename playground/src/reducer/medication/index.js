import constants from "./constants";

/*
STATE STRUCTURE
*/
const initialState = {
	value: '',
	suggestions: []
};


// ct-autosuggest helper functions
// -------------------------------- |)}>#
function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');

  return currencies.filter(cur => regex.test(cur.name) || regex.test(cur.code));
}

function updateSuggestions(autosuggest, action) {
	if (autosuggest.value !== action.value)
		return autosuggest;
	else
		return {
      ...autosuggest,
      suggestions: getSuggestions(action.value)
		};
}

export default function autosuggest(autosuggest = initialState, action) {
	switch(action.type) {
		case constants.UPDATE_SUGGESTION_VALUE:
      console.log('UPDATE_SUGGESTION_VALUE');
			return {
        ...autosuggest,
				value: action.value
			};
		case constants.UPDATE_SUGGESTIONS:
      console.log('UPDATE_SUGGESTIONS');

			return updateSuggestions(autosuggest, action);
		case constants.CLEAR_SUGGESTIONS:
      console.log('CLEAR_SUGGESTIONS');

			return {
        ...autosuggest,
        suggestions:  []
      };
		default:
      console.log('DEFAULT', autosuggest);
			return autosuggest;
	}
}
