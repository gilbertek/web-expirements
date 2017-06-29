import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClinicalMedicationForm from './ClinicalMedicationForm';

const styles = {
  active: {
    display: 'inherit',
  },

  inactive: {
    display: 'none',
  },
};

class ClinicalMedicationFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active:        true,
      medication:    Object.assign({}, this.props.medication),
      directionList: [],
      statusList:    [],
      errors:        {},
    };

    this.toggle         = this.toggle.bind(this);
    this.handleOnSave   = this.handleOnSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.medication.id != nextProps.medication.id) {
      this.setState({ medication: Object.assign({}, nextProps.medication) });
    }
  }

  handleOnSave(event) {
    event.preventDefault();

    this.props.saveMedication(this.state.medication);
  }

  handleOnChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const medication = this.state.medication;
    medication[field] = event.target.value;
    return this.setState({ medication });
  }
  render() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const { isSaving, statusList, directionList } = this.props;

    return (
      <section className='row'>
        <a onClick={this.toggle}>
          <h4>Add additional Patient Identified Medications</h4>
        </a>
        <p>Instruction to provider: Enter additional medications
          patient has indicated they are taking</p>

        <div style={stateStyle}>
          <ClinicalMedicationForm
            medication={this.state.medication}
            directionList={directionList}
            statusList={statusList}
            onSave={this.handleOnSave}
            onChange={this.handleOnChange}
            isSaving={isSaving}
            errors={this.state.errors} />
        </div>
      </section>
    );
  }
}

ClinicalMedicationFormContainer.defaultProps = {
  errors:        {},
  statusList:    [
    { value: 1, text: 'Current' },
    { value: 2, text: 'Past' },
    { value: 3, text: 'Never Taken' }
  ],
  directionList: [
    { value: 1, text: '1' },
    { value: 2, text: '2' }
  ],
  medication:    {},
  isSaving:      false,
};

ClinicalMedicationFormContainer.propTypes = {
  medication:         PropTypes.object,
  directionList:      PropTypes.array.isRequired,
  statusList:         PropTypes.array.isRequired,
  isSaving:           PropTypes.bool.isRequired,
  errors:             PropTypes.object,
  saveMedication:     PropTypes.func,
};

const mapStateToProps = (state) => {
  const medication = {
    name:      '',
    dosage:    '',
    direction: '',
    status:    'Current'
  };

  return {
    medication,
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMedication: (medication) => dispatch(Promise.resolve(medication))
  };
};

export default (connect)(
  mapStateToProps,
  mapDispatchToProps
)(ClinicalMedicationFormContainer);
