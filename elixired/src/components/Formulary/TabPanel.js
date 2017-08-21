import React from 'react';
import PropTypes from 'prop-types';
import ToggleableComponent from '../Shared/ToggleableComponent';
import FormularyStatusComponent from './FormularyStatusComponent';
import PayerPlanComponent from './PayerPlanComponent';
import CopayComponent from './CopayComponent';
import CoverageComponent from './CoverageComponent';
import AlternateMedicationList from './AlternateMedicationList';
import * as Payer from '../../lib/Payer';

const TabPanel = (props) => {
  const {
    tabIndex,
    className,
    preferred_ndcs,
    plan,
    formulary_status_text,
    formulary_status,
    errors,
    displayable_coverage_details,
    displayable_alternatives
  } = props;

  const currentPlan = new Payer.Plan(plan);
  const WrappedFormularyStatus = ToggleableComponent(FormularyStatusComponent);
  const WrappedPayerPlan = ToggleableComponent(PayerPlanComponent);
  const WrappedCopay = ToggleableComponent(CopayComponent);
  const WrappedCoverage = ToggleableComponent(CoverageComponent);
  const WrappedAltMeds = ToggleableComponent(AlternateMedicationList);

  return (
    <div
      className={`tab__content ${className}`}
      aria-labelledby={`tab-${tabIndex}`}
      role='tabpanel'
      id={`tab-${tabIndex}`}>
      <WrappedFormularyStatus
        statusText={formulary_status_text}
        toggled />
      <WrappedPayerPlan plan={currentPlan}
        toggled />
      <WrappedCopay plan={currentPlan}
        toggled />
      <WrappedCoverage plan={currentPlan}
        toggled />

      { displayable_alternatives
        ? (
        <WrappedAltMeds
          altMeds={displayable_alternatives}
          toggled />
        ): ''
      }
    </div>
  );
};

TabPanel.propTypes = {
  tabIndex:                     PropTypes.number,
  isActive:                     PropTypes.bool,
  className:                    PropTypes.string,
  preferred_ndcs:               PropTypes.array,
  plan:                         PropTypes.object,
  formulary_status_text:        PropTypes.string,
  formulary_status:             PropTypes.string,
  errors:                       PropTypes.array,
  displayable_coverage_details: PropTypes.array,
  displayable_alternatives:     PropTypes.array
};

export default TabPanel;
