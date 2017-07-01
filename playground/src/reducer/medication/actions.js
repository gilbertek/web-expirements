import constants from "./constants";

export function updateAutosuggestValueAction(value) {
  return {
    type: constants.UPDATE_SUGGESTION_VALUE,
    value
  };
};

export function updateAutosuggestAction(value) {
  return {
    type: constants.UPDATE_SUGGESTIONS,
    value
  };
};

export function clearAutosuggestAction() {
  return {
    type: constants.CLEAR_SUGGESTIONS
  };
};
