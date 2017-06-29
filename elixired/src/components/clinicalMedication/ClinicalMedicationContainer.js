import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchClinicalMedications } from '../../reducers/clinicalMedications/actions';
import ClinicalMedicationList from './ClinicalMedicationList';
import FetchApiError from '../Shared/FetchApiError';
import SearchBox from '../Shared/SearchBox';

class ClinicalMedicationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched:              false,
      clinical_medications: [],
      searchTerm:           ''
    };
  }

  componentDidMount() {
    const { searchTerm, memberId, searchDrugByName } = this.props;

    this.props.fetchClinicalMedications(memberId);

    if (searchTerm) {
      searchDrugByName(searchTerm);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm, searchDrugByName } = this.props;
    if (nextProps.searchTerm !== searchTerm) {
      searchDrugByName(nextProps.searchTerm);
    }
  }

  handleSearch = (searchTerm) => {
    this.prop.searchDrugByName(searchTerm);
  }

  render() {
    const { fetched, clinicalMedications, errorMessage, searchTerm } = this.props;

    if (errorMessage) {
      return (
        <div className='clinical-medication-list'>
          <FetchApiError message={errorMessage} />
        </div>
      );
    }

    return (
      <div className='clinical-medication-list'>
        {
          fetched &&
          <ClinicalMedicationList
            medicationList={clinicalMedications}
          />
        }
        <SearchBox term={searchTerm}
          handleSearch={this.handleSearch} />
      </div>
    );
  }
}

ClinicalMedicationContainer.propTypes = {
  fetched:                  PropTypes.bool,
  memberId:                 PropTypes.number.isRequired,
  clinicalMedications:      PropTypes.array,
  fetchClinicalMedications: PropTypes.func,
  errorMessage:             PropTypes.string,
  searchTerm:               PropTypes.string,
  searchDrugByName:         PropTypes.func
};

function mapStateToProps(state) {
  let clinicalMedications;
  if (state.clinicalMedications) {
    clinicalMedications = state.clinicalMedications.clinical_medications;
  }

  return {
    fetched:      state.clinicalMedications.fetched,
    errorMessage: state.clinicalMedications.message,
    clinicalMedications
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchClinicalMedications: () => {
    dispatch(fetchClinicalMedications(ownProps.memberId));
  },
  searchDrugByName: () => {
    new Promise.resolve();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClinicalMedicationContainer);
