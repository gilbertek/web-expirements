import React from 'react';
import PropTypes from 'prop-types';

const CopayComponent = ({ plan, toggled, style, onClick }) => (
  <div className='wrapper'>
    <h3 className='section-header'
      onClick={onClick}>
      Copay Information
      <div className={`toggle toggle-${toggled}`}
        onClick={onClick}>
        <span>&nbsp;</span>
      </div>
    </h3>

    <div style={style}>
      <table>
        <thead>
          <tr>
            <th>Pharmacy Type</th>
            <th>Copay Amount</th>
            <th>Copay Tier</th>
            <th>Min/Max Copay</th>
            <th>Out of Pocket</th>
            <th>Days Supply Per Copay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mail Order</td>
            <td>$15-$45</td>
            <td>Copay Tier 3 (of 3)</td>
            <td>$5-$20</td>
            <td>$5 - Unlimited</td>
            <td>90 Days</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

CopayComponent.propTypes = {
  plan:    PropTypes.object.isRequired,
  style:   PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

export default CopayComponent;
