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
		return update(autosuggest, {
			suggestions: { $set: getSuggestions(action.value) }
		});
}

export default function autosuggest(autosuggest={}, action) {
	switch(action.type) {
		case constants.UPDATE_SUGGESTION_VALUE:
			return update(autosuggest, {
				value: { $set: action.value }
			} );
		case constants.UPDATE_SUGGESTIONS:
			return updateSuggestions(autosuggest, action);
		case constants.CLEAR_SUGGESTIONS:
			return update(autosuggest, {suggestions: { $set: [] }});
		default:
			return autosuggest;
	}
}
