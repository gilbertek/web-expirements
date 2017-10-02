import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  header: {
    background: '#e5f4fa',
    fontWeight: 600,
    position:   'relative',
    padding:    '8px'
  },

  coverageWrapper: {
    border: '1px solid #ccc',
    margin:     '0.5em 0'

  },

  coverageBody: {
    padding:    '8px'
  }
};

const AgeLimitComponent = props => {
  console.log('AgeLimitComponent::props::', props);

  const { age_limit: { text, min_age, max_age } } = props;
  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Age Limit</h4>
      <div style={styles.coverageBody}>
        { min_age && (<p>Min Age: {min_age} </p>) }
        { max_age && (<p>Min Age: {max_age} </p>) }
        { text && (<p>Age Limit: {text} </p>) }
      </div>
    </div>
  );
};

const StepMedicationComponent = props => {
  console.log('StepMedicationComponent::props::', props);

  const {
    step_medication_info: {
      step_drug,
      step_medication
    }
  } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Step Drug:</h4>
      <div style={styles.coverageBody}>
        <p>Drug name: {step_drug.drug_name}</p>
        <p>Product Strength: {step_drug.product_strength}</p>
        <p>Dose Form: {step_drug.dose_form}</p>
        <p>Route: {step_drug.route_name}</p>
        <p>Brand/Generic: {step_drug.gbo}</p>
        <p>OTC Status: {step_drug.otc_status}</p>
        <p>Step Order: {step_medication.step_order}</p>
        <p>Medication NDC: {step_medication.ndc}</p>
      </div>
    </div>
  );
};

const QuantityLimitComponent = props => {
  console.log('QuantityLimitComponent::props::', props);
  const { quantity_limit: { max_amount } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Quantity Limit </h4>
      <div style={styles.coverageBody}>
        {max_amount}
      </div>
    </div>
  );
};

const PriorAuthorizationComponent = props => {
  console.log('PriorAuthorizationComponent::props::', props);
  const { prior_authorization: { text } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Prior Authorization: </h4>
      <div style={styles.coverageBody}>
        {text}
      </div>
    </div>
  );
};

const StepTherapyComponent = props => {
  console.log('StepTherapyComponent::props::', props);
  const { step_therapy: { text } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Step Therapy </h4>
      <div style={styles.coverageBody}>
        {text}
      </div>
    </div>
  );
};

const MessageComponent = props => {
  console.log('MessageComponent::props::', props);
  const { messages: { short, long } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Message: </h4>
      <div style={styles.coverageBody}>
        {short && (<p>{short}</p>)}
        {long && (<p>{long}</p>)}
      </div>
    </div>
  );
};

const ResourceLinkComponent = props => {
  console.log('ResourceLinkComponent::props::', props);
  const { resource_link: { resource_link: { type } } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Resource Link: </h4>
      <div style={styles.coverageBody}>
        {type}
      </div>
    </div>
  );
};

const GenderLimitComponent = props => {
  console.log('GenderLimitComponent::props::', props);
  const { gender_limit: { gender_limit } } = props;

  return (
    <div style={styles.coverageWrapper}>
      <h4 style={styles.header}>Gender Limit: </h4>
      <div style={styles.coverageBody}>
        {gender_limit}
      </div>
    </div>
  );
};


const CoverageDetailComponent = (props) => {
  console.log('CoverageDetailComponent::props::', props);
  console.log('CoverageDetailComponent::props::Keys>>>', Object.keys(props));

  const componentList = Object.keys(props).map((keyName, index) => {
    console.log('keyIndex >>>>', index);
    console.log('keyName >>>>', keyName);
    if (keyName === 'age_limit') {
      return <AgeLimitComponent {...props} />;
    }

    if (keyName === 'step_medication_info') {
      return <StepMedicationComponent {...props} />;
    }

    if (keyName === 'quantity_limit') {
      return <QuantityLimitComponent {...props} />;
    }

    if (keyName === 'step_therapy') {
      return <StepTherapyComponent {...props} />;
    }

    if (keyName === 'messages') {
      return <MessageComponent {...props} />;
    }

    if (keyName === 'resource_link') {
      return <ResourceLinkComponent {...props} />;
    }

    if (keyName === 'gender_limit') {
      return <GenderLimitComponent {...props} />;
    }

    if (keyName === 'prior_authorization') {
      return <PriorAuthorizationComponent {...props} />;
    }
  });

  // const rrr = Object.keys(props).map(key =>
  //   <div key={key}>Key: {key}, Value: {props[key]}</div>
  // );

  // const rrr = [];
  // for (const key in props) {
  //   rrr.push(<p>{key} : {props[key]}</p>);
  // }

  // const rrr = Object.entries(props).map(([key, value]) =>
  //   <div>{key} : {value.toString()}</div>
  // );

  console.log('componentList>>>', componentList);

  return (
    <div>
      {
        componentList.map((component, index) =>
          <div key={index}>{component}</div>
        )
      }
    </div>
  );
};

CoverageDetailComponent.propTypes = {
  children: PropTypes.node,
  record_type: PropTypes.string,
};

export default CoverageDetailComponent;
