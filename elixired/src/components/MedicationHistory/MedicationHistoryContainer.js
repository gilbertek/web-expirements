import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMedicationHistoryRecords,
  updateMedicationList
} from '../../reducers/medicationHistory/actions';
import MedicationHistoryList from './MedicationHistoryList';
import ShowMoreWrapper from './ShowMoreWrapper';
import FetchApiError from '../Shared/FetchApiError';

const styles = {
  disclaimer: {
    marginTop: '50px',
    marginBottom: '50px',
    borderBottom: '1px solid #ccc'
  },
  disclaimerText: {
    margin: '10px 0'
  },
  medicationHistory: {
    display: 'flex',
    flexFlow: 'column',
    border: '1px solid #ccc'
  }
};

const ShowInstruction = () =>
  (
    <div className='disclaimer'
      style={styles.disclaimer}>
      <p className='disclaimerText'>
        Instructions to Provider to review medication history with patient
        and mark as current, past or denied taking.
      </p>
    </div>
  );

class MedicationHistoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched:           false,
      medicationRecords: {},
      showMore:          false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMedicationListUpdate = this.handleMedicationListUpdate.bind(this);
  }

  componentWillMount() {
    const { memberId, editMode } = this.props;
    this.props.fetchMedicationHistoryRecords(memberId);
    this.setState({ editMode, memberId });
  }

  handleClick() {
    this.setState({ showMore: !this.state.showMore });
  }

  handleMedicationListUpdate(prescription) {
    this.props.handleMedicationListUpdate(prescription);
  }

  render() {
    const { fetched, medicationRecords, errorMessage } = this.props;

    if (errorMessage) {
      return (
        <div className='medication-history-records'>
          <FetchApiError message={errorMessage} />
        </div>
      );
    }

    return (
      <div className='medication-history-records'
        style={styles.medicationHistory}>
        { this.state.editMode && fetched && <ShowInstruction />}

        {
          fetched &&
          <MedicationHistoryList
            medicationRecords={medicationRecords}
            showMore={this.state.showMore}
            editMode={this.state.editMode}
            onChange={this.handleMedicationListUpdate}
          />
        }

        {
          fetched &&
          <ShowMoreWrapper
            toggle={this.state.showMore}
            onClick={this.handleClick}
          />
        }
      </div>
    );
  }
}

MedicationHistoryContainer.defaultProps = {
  fetched:           false,
  medicationRecords: {},
  editMode:          false
};

MedicationHistoryContainer.propTypes = {
  memberId:                      PropTypes.number.isRequired,
  editMode:                      PropTypes.bool.isRequired,
  medicationRecords:             PropTypes.object,
  fetchMedicationHistoryRecords: PropTypes.func,
  handleMedicationListUpdate:    PropTypes.func,
  fetched:                       PropTypes.bool,
  errorMessage:                  PropTypes.string
};

const mapStateToProps = (state) => (
  {
    fetched:           state.medicationHistory.fetched,
    medicationRecords: state.medicationHistory.medicationRecords,
    errorMessage:      state.medicationHistory.message
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchMedicationHistoryRecords: (memberId) =>
      dispatch(fetchMedicationHistoryRecords(memberId)),
    handleMedicationListUpdate: (medication) =>
      dispatch(updateMedicationList(medication))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicationHistoryContainer);
