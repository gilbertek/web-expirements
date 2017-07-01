import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {
  clearAutosuggestAction,
  updateAutosuggestValueAction,
  updateAutosuggestAction
}  from '../../reducer/medication/actions';

class MedicationContainer extends Component {
  constructor(props) {
    super(props);

  }

  onChange(e, { newValue }) {
		this.props.updateAutosuggestValueAction(newValue);
	}

	onSuggestionsFetchRequest({ value }) {
		this.props.updateAutosuggestAction(value);
  }

  render() {
    const { autosuggest } = this.props;
    console.log(autosuggest);

    const inputProps = {
      placeholder: "Select ...",
      value: autosuggest.value,
      onChange: this.onChange.bind(this)
    };

    return (
      <Autosuggest
				suggestions={autosuggest.suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequest.bind(this)}
				onSuggestionsClearRequested={this.props.clearAutosuggestAction}
				getSuggestionValue={(suggestion) => suggestion.code}
				renderSuggestion={(suggestion) => <span>({suggestion.code}) {suggestion.name}</span>}
				shouldRenderSuggestions={() => true}
				inputProps={inputProps}
			/>
    );
  }
}

MedicationContainer.propTypes = {
  autosuggest: PropTypes.shape({
    value:       PropTypes.string.isRequired,
    suggestions: PropTypes.array.isRequired
  }),
  clearAutosuggestAction: PropTypes.func,
  updateAutosuggestValueAction: PropTypes.func,
  updateAutosuggestAction: PropTypes.func
};

const mapDispatchToProps = (dispatch) => (
  {
    clearAutosuggestAction: () => dispatch(clearAutosuggestAction()),
  }
);

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
	return {
    autosuggest: state.autosuggest
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicationContainer);
