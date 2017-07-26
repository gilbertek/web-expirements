import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleableComponent from '../Shared/ToggleableComponent';
import FormularyStatusComponent from './FormularyStatusComponent';
import * as Payer from '../../lib/Payer'

class PayerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PAYERCOMPONENT::PROPS::', this.props.payer);
    const { payer } = this.props;
    const plan = new Payer.Plan(payer.plan);
    const WrappedFormularyStatus = ToggleableComponent(FormularyStatusComponent);
    const WrappedPayerPlan = ToggleableComponent(PayerPlanComponent);

    return (
      <div className='wrapper'>
        <FormularyResponseHeaderComponent
          plan_name={plan.getPbmName()} />

        <WrappedFormularyStatus
          statusText={payer.formulary_status_text}
          toggled />

        <WrappedPayerPlan plan={plan}
          toggled />
      </div>
    );
  }
}

const PayerPlanComponent = ({ plan, toggled, style, onClick }) => (
  <div className='wrapper'>
    <h3 className='section-header'
      onClick={onClick}>
      Payer Plan: {plan.getPbmName()}
      <div className={`toggle toggle-${toggled}`}
        onClick={onClick}>
        <span>&nbsp;</span>
      </div>
    </h3>

    <div style={style}>
      <table>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Plan Name</th>
            <th>Plan #</th>
            <th>Group Name</th>
            <th>Group #</th>
            <th>PBM Name</th>
            <th>PBM ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{plan.getMemberId()}</td>
            <td>{plan.getPlanName()}</td>
            <td>{plan.getPlanId()}</td>
            <td>{plan.getGroupName()}</td>
            <td>{plan.getGroupId()}</td>
            <td>{plan.getPbmName()}</td>
            <td>{plan.getPbmId()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

PayerPlanComponent.propTypes = {
  plan:    PropTypes.object.isRequired,
  style:   PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

const FormularyResponseHeaderComponent = ({ plan_name }) => (
  <h3>Formulary Response for {plan_name}</h3>
);

FormularyResponseHeaderComponent.propTypes = {
  plan_name: PropTypes.string.isRequired
};

export default PayerComponent;
