import React from 'react';
import PropTypes from 'prop-types';

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

export default PayerPlanComponent;
