import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoSuggest from 'react-autosuggest';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchEmployee,
  selectedEmployee,
  resetEmployeeList
}  from '../../reducer/users/actions';

function dispatchActionToProps(dispatch) {
  return {
    fetchEmployees: bindActionCreators(fetchEmployee, dispatch),
    selectEmployee: bindActionCreators(selectedEmployee, dispatch),
    resetEmployeeList: bindActionCreators(resetEmployeeList, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    employees: state.users.employees,
    selectedEmployee: state.users.selectedEmployee,
  };
}

function getSuggestionValue(suggestion) {
  return suggestion.DrugName;
}

function renderSuggestion(suggestion) {
  return `${suggestion.DrugName} ${suggestion.Category}`;
}


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: this.props.employees,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.searchEmployee = this.searchEmployee.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.updateSelectedEmployee = this.updateSelectedEmployee.bind(this);
  }

  componentWillMount() {
    // this.props.fetchVendors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.employees !== nextProps.employees) {
      this.setState({
        suggestions: nextProps.employees,
      });
    }
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.employees.filter(employee =>
      employee.DrugName.toLowerCase().slice(0, inputLength) === inputValue,
    );
  }

  onSuggestionSelected(event, { suggestion }) {
    this.props.selectEmployee(suggestion);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
    this.searchEmployee(value);
  }

  searchEmployee(value) {
    if (value.length > 1) {
      this.props.fetchEmployees(value);
    } else {
      this.props.resetEmployeeList();
    }
  }

  updateSelectedEmployee(selectedEmp) {
    this.props.selectEmployee(selectedEmp);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Enter name...',
      value,
      onChange: this.onChange,
    };

    return (
      <div>
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps} />
      </div>
    );
  }
}

UserContainer.propTypes = {
  fetchEmployees: PropTypes.func,
  selectEmployee: PropTypes.func,
  resetEmployeeList: PropTypes.func,
  employees:        PropTypes.array,
  selectedEmployee: PropTypes.object,
};

export default connect(
  mapStateToProps,
  dispatchActionToProps
)(UserContainer);
