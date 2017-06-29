import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prescription from '../../lib/Prescription';
import MedicationWrapper from './MedicationWrapper';
import PharmacyWrapper from './PharmacyWrapper';
import CheckboxOrRadioGroup from '../Shared/CheckboxOrRadioGroup';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  },
  columnHalf: {
    clear:   'both',
    width:   '50%',
    display: 'inline-block'
  }
};

const PrescriptionHeader = ({ title }) =>
  <h5>{title}</h5>;

PrescriptionHeader.propTypes = {
  title: PropTypes.string.isRequired
};

class MedicationHistoryListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prescription:    Object.assign({}, this.props.prescription),
      active:          false,
      responseOptions: [],
      selectedOptions: []
    };

    this.toggle = this.toggle.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  handleCheckboxChange(event) {
    const prescription = this.state.prescription;
    prescription.actively_taking_flg = event.target.value;

    this.setState({
      selectedOptions: [event.target.value],
      prescription
    });

    return this.props.onChange(prescription);
  }

  render() {
    const { prescription, editMode, responseOptions } = this.props;
    const med = new Prescription(prescription);
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div className='table-row-wrapper'>
        <div className='table-row'>
          <div className='text'>
            <a onClick={this.toggle}>
              <PrescriptionHeader
                title={med.getTitle()}
              />
            </a>
          </div>
          <div className='date-text'>{med.getLastFillDate()}</div>

          { editMode &&
            <div className='text'>
              <CheckboxOrRadioGroup
                title={''}
                setName={'currentlyTaking'}
                controlFunc={this.handleCheckboxChange}
                type={'radio'}
                options={responseOptions}
                selectedOptions={this.state.selectedOptions}
              />
            </div>
          }
        </div>
        <div className='med-description-details'
          style={stateStyle}>
          <div style={styles.columnHalf}>
            <MedicationWrapper
              qty={med.getQuantity()}
              daysSupply={med.getDaysSupply()}
              refills={med.getRefillCount()}
            />
          </div>
          <div style={styles.columnHalf}>
            <span>Source: Payer / Prescription Fill</span>
            <PharmacyWrapper
              name={med.getPharmacyName()}
              id={med.getPharmacyNCPID()}
            />
          </div>
        </div>
      </div>
    );
  }
}

MedicationHistoryListItem.propTypes = {
  prescription:    PropTypes.object.isRequired,
  patient:         PropTypes.object.isRequired,
  editMode:        PropTypes.bool.isRequired,
  responseOptions: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  onChange:        PropTypes.func.isRequired
};

MedicationHistoryListItem.defaultProps = {
  editMode:        false,
  responseOptions: ['Yes', 'No', 'Patient has not taken']
};

export default MedicationHistoryListItem;
