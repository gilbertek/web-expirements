import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchApiError from '../Shared/FetchApiError';
import ToggleableComponent from '../Shared/ToggleableComponent';
import FormularyStatusComponent from './FormularyStatusComponent';
import PayerPlanComponent from './PayerPlanComponent';
import CopayComponent from './CopayComponent';
import CoverageComponent from './CoverageComponent';
import AlternateMedicationList from './AlternateMedicationList';
import * as Payer from '../../lib/Payer';
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
    const { isLoading, fetched, formulary, errorMessage } = this.props;
    const { payers, drug } = formulary;

    // console.log('PAYERS' ,payers);
    // console.log('DRUG', drug);

    if (errorMessage) {
      return (
        <div className='wrapper'>
          <FetchApiError message={errorMessage} />
        </div>
      );
    }

    if (fetched) {
      const payer = payers[0];
      const plan = new Payer.Plan(payer.plan);
      const WrappedFormularyStatus = ToggleableComponent(FormularyStatusComponent);
      const WrappedPayerPlan = ToggleableComponent(PayerPlanComponent);
      const WrappedCopay = ToggleableComponent(CopayComponent);
      const WrappedCoverage = ToggleableComponent(CoverageComponent);
      const WrappedAltMeds = ToggleableComponent(AlternateMedicationList);

      return (
        <div className='wrapper'>
          <FormularyResponseHeaderComponent
            plan_name={plan.getPbmName()} />
          <WrappedFormularyStatus
            statusText={payer.formulary_status_text}
            toggled />
          <WrappedPayerPlan plan={plan}
            toggled />
          <WrappedCopay plan={plan}
            toggled />
          <WrappedCoverage plan={plan}
            toggled />
          <WrappedAltMeds
            altMeds={payer.displayable_alternatives}
            toggled />
        </div>
      );
    } else {
      return (
        <p>Loading....</p>
      );
    }
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


const FormularyResponseHeaderComponent = ({ plan_name }) => (
  <h3>Formulary Response for {plan_name}</h3>
);

FormularyResponseHeaderComponent.propTypes = {
  plan_name: PropTypes.string.isRequired
};
