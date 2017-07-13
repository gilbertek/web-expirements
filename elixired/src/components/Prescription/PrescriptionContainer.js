import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from '../Shared/SearchBox';
import DrugList from './DrugList';
import PrescriptionForm from './PrescriptionForm';
import {
  fetchDrugs,
  fetchDrugsByName
} from '../../reducers/prescription/actions';

class PrescriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  componentWillMount() {
    const { fetchDrugs } = this.props;
    fetchDrugs();
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm, fetchDrugsByName } = this.props;
    if (nextProps.searchTerm !== searchTerm) {
      fetchDrugsByName(nextProps.searchTerm);
    }
  }

  handleSearch = (searchTerm) => {
    this.props.fetchDrugsByName(searchTerm);
  }

  render() {
    const { searchTerm, searchResult } = this.props;

    return (
      <div className='row'>
        <h1>Prescription</h1>

        <SearchBox term={searchTerm}
          handleSearch={this.handleSearch} />

        {
          searchResult.length !== 0 ? <DrugList drugs={searchResult} /> : ''
        }

        <PrescriptionForm />
      </div>
    );
  }
}

PrescriptionContainer.defaultProps = {
  isFetching:   false,
  fetched:      false,
  drugs:        [],
  searchResult: []
};

PrescriptionContainer.propTypes = {
  searchTerm:       PropTypes.string,
  searchResult:     PropTypes.array,
  drugs:            PropTypes.array.isRequired,
  fetchDrugsByName: PropTypes.func,
  fetchDrugs:       PropTypes.func,
  fetched:          PropTypes.bool.isRequired,
  isFetching:       PropTypes.bool.isRequired,
  errorMessage:     PropTypes.string
};

const mapStateToProps = (state) => (
  {
    fetched:      state.prescription.fetched,
    isFetching:   state.prescription.isFetching,
    drugs:        state.prescription.drugs,
    searchResult: state.prescription.searchResult,
    errorMessage: state.prescription.message
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchDrugsByName: (searchTerm) =>
      dispatch(fetchDrugsByName(searchTerm)),
    fetchDrugs: () =>
      dispatch(fetchDrugs())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrescriptionContainer);
