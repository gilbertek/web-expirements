import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchApiError from '../Shared/FetchApiError';
import DrugFormComponent from './DrugFormComponent';
import PayerListComponent from './PayerListComponent';

import {
  fetchFormularyDrug
} from '../../reducers/formulary/actions';

class FormularyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched:   false,
      formulary: {},
      isLoading: false,
      drugName:  ''
    };
  }

  componentWillMount() {
    const { drugName } = this.state;
    this.props.fetchFormularyDrug(drugName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.drugName !== nextProps.drugName) {
      this.setState({
        formulary: nextProps.formulary
      });
    }
  }

  render() {
    console.log('PROPS::', this.props);

    const { isLoading, fetched, formulary, errorMessage } = this.props;

    console.log('FORMULARY::', formulary);

    if (isLoading) {
      return (
        <p>Loading....</p>
      );
    }

    if (errorMessage) {
      return (
        <div className='wrapper'>
          <FetchApiError message={errorMessage} />
        </div>
      );
    }

    return (
      <div className='wrapper'>
        {
          fetched &&
          <DrugFormComponent drug={formulary.drug} />
        }
        {
          fetched &&
          <PayerListComponent payers={formulary.payers} />
        }
      </div>
    );
  }
}

FormularyContainer.defaultProps = {
  drugName:     '',
  isLoading:    false,
  formulary:    {},
  errorMessage: ''
};

FormularyContainer.propTypes = {
  fetched:            PropTypes.bool,
  children:           PropTypes.node,
  fetchFormularyDrug: PropTypes.func,
  isLoading:          PropTypes.bool.isRequired,
  drugName:           PropTypes.string.isRequired,
  formulary:          PropTypes.object.isRequired,
  errorMessage:       PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  let formulary;
  if (state.formulary) {
    formulary = state.formulary.response;
  }

  return {
    fetched:      state.formulary.fetched,
    isLoading:    state.formulary.isLoading,
    errorMessage: state.formulary.message,
    formulary
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFormularyDrug: (drugName) => {
    dispatch(fetchFormularyDrug(drugName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormularyContainer);
