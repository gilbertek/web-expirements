import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleableComponent from '../Shared/ToggleableComponent';
import FormularyStatusComponent from './FormularyStatusComponent';
import PayerPlanComponent from './PayerPlanComponent';
import CopayComponent from './CopayComponent';
import * as Payer from '../../lib/Payer';

class PayerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { payer } = this.props;
    const plan = new Payer.Plan(payer.plan);
    const WrappedFormularyStatus = ToggleableComponent(FormularyStatusComponent);
    const WrappedPayerPlan = ToggleableComponent(PayerPlanComponent);
    const WrappedCopay = ToggleableComponent(CopayComponent);

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
      </div>
    );
  }
}

PayerComponent.propTypes = {
  payer: PropTypes.object.isRequired
};

const FormularyResponseHeaderComponent = ({ plan_name }) => (
  <h3>Formulary Response for {plan_name}</h3>
);

FormularyResponseHeaderComponent.propTypes = {
  plan_name: PropTypes.string.isRequired
};

export default PayerComponent;
