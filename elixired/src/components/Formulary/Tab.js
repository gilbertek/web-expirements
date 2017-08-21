import React from 'react';
import PropTypes from 'prop-types';
import * as Payer from '../../lib/Payer';

const FormularyResponseHeaderComponent = ({ plan_name }) => (
  <h3>Formulary Response for {plan_name}</h3>
);

FormularyResponseHeaderComponent.propTypes = {
  plan_name: PropTypes.string.isRequired
};

const Tab = (props) => {
  const {
    tabIndex,
    isActive,
    onClick,
    className,
    plan,
  } = props;

  const currentPlan = new Payer.Plan(plan);

  return (
    <li
      className='tab__link'
      role='tab'
      tabIndex={tabIndex}
      aria-controls={`tab-${tabIndex}`}
      aria-selected={isActive ? 'true' : 'false'}
      aria-disabled={isActive ? 'false' : 'true'}>
      <a
        className={`tab__link-anchor ${className} ${isActive ? 'active' : ''}`}
        href='#'
        onClick={
          (event) => {
            event.preventDefault();
            onClick(tabIndex);
        }}
      >
        <FormularyResponseHeaderComponent
          plan_name={currentPlan.getPbmName()} />
      </a>
    </li>
  );
};

Tab.propTypes = {
  onClick:   PropTypes.func,
  tabIndex:  PropTypes.number,
  className: PropTypes.string,
  isActive:  PropTypes.bool,
  plan:      PropTypes.object
};

export default Tab;
