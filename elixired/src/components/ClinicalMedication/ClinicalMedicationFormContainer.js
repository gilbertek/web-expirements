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
      active:        false,
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
    const { loadDirectionList } = this.props;
    loadDirectionList();
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

    const {
      medication,
      isSaving,
      errors
    } = this.state;

    return (
      <section>
        <a onClick={this.toggle}>
          <h4>Add additional Patient Identified Medications</h4>
        </a>
        <p>Instruction to provider: Enter additional medications
          patient has indicated they are taking</p>

        <p style={stateStyle}>
          <ClinicalMedicationForm
            medication={medication}
            directionList={this.props.directionList}
            statusList={this.prop.statusList}
            onSave={this.handleOnSave}
            onChange={this.handleOnChange}
            isSaving={isSaving}
            errors={errors} />
        </p>
      </section>
    );
  }
}

ClinicalMedicationFormContainer.defaultProps = {
  errors:        {},
  statusList:    [],
  directionList: [],
  medication:    {},
  isSaving:      false
};

ClinicalMedicationFormContainer.propTypes = {
  medication:        PropTypes.object,
  directionList:     PropTypes.array.isRequired,
  statusList:        PropTypes.array.isRequired,
  isSaving:          PropTypes.bool.isRequired,
  errors:            PropTypes.object,
  saveMedication:    PropTypes.func,
  loadDirectionList: PropTypes.func,
  loadStatusList:    PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDirectionList: () => dispatch(Promise.resolve()),
    saveStatusList: () => dispatch(Promise.resolve()),
    saveMedication: (medication) => dispatch(Promise.resolve(medication))
  };
};

export default (connect)(
  mapDispatchToProps,
  {}
)(ClinicalMedicationFormContainer);
