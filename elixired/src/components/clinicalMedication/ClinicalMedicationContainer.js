import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchClinicalMedications } from '../../reducers/clinicalMedications/actions';
import ClinicalMedicationList from './ClinicalMedicationList';
import FetchApiError from '../Shared/FetchApiError';

class ClinicalMedicationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched:              false,
      clinical_medications: []
    };
  }

  componentDidMount() {
    this.props.fetchClinicalMedications(this.props.memberId);
  }

  render() {
    const { fetched, clinicalMedications, errorMessage } = this.props;

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
      </div>
    );
  }
}

ClinicalMedicationContainer.propTypes = {
  fetched:                  PropTypes.bool,
  memberId:                 PropTypes.number.isRequired,
  clinicalMedications:      PropTypes.array,
  fetchClinicalMedications: PropTypes.func,
  errorMessage:             PropTypes.string
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClinicalMedicationContainer);

// import { connect } from 'react-redux';
// import { fetchClinicalMedications } from '../../reducers/clinicalMedications/actions';
// import ClinicalMedication from './ClinicalMedication';

// const mapStateToProps = (state, ownProps)  => {
//   let clinicalMedications;
//   if (state.clinicalMedications) {
//     clinicalMedications = state.clinicalMedications.clinical_medications;
//   }

//   return {
//     memberId:     ownProps.memberId,
//     fetched:      state.clinicalMedications.fetched,
//     errorMessage: state.clinicalMedications.message,
//     clinicalMedications
//   };
// }



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   // { fetchClinicalMedications }
// )(ClinicalMedication);
