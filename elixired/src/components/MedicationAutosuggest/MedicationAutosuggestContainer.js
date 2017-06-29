import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import {
  updateInputValue,
  clearSuggestions,
  loadSuggestions
} from '../../reducers/medication/actions';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class MedicationAutosuggestContainer extends Component {
  render() {
    const { searchTerm } = this.props;
    const {
      value,
      suggestions,
      isLoading,
      onChange,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested
    } = this.props;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange
    };

    return (
      <div className='row'>
        <h1>Prescription</h1>

        <SearchBox term={searchTerm}
          handleSearch={this.handleSearch} />

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

PrescriptionContainer.defaultProps = {
  isLoading:   false,
  fetched:     false,
  drugs:       [],
  suggestions: []
};

PrescriptionContainer.propTypes = {
  searchTerm:       PropTypes.string,
  drugs:            PropTypes.array.isRequired,
  fetchDrugsByName: PropTypes.func,
  fetchDrugs:       PropTypes.func,
  fetched:          PropTypes.bool.isRequired,
  isLoading:        PropTypes.bool.isRequired,
  errorMessage:     PropTypes.string,
  suggestions:      PropTypes.array,
  onChange:         PropTypes.func,
  onSuggestionsFetchRequested: PropTypes.func,
  onSuggestionsClearRequested: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    // fetched:      state.prescription.fetched,
    // isLoading:   state.prescription.isLoading,
    // drugs:        state.prescription.drugs,
    // errorMessage: state.prescription.message,

    value:        state.value,
    suggestions:  state.suggestions,
    isLoading:    state.isLoading
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchDrugsByName: (searchTerm) =>
      dispatch(fetchDrugsByName(searchTerm)),
    fetchDrugs: () =>
      dispatch(fetchDrugs()),

    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicationAutosuggestContainer);
