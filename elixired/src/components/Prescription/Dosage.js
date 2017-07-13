import React from 'react';
import PropTypes from 'prop-types';
import { parseText } from '../../lib/Utils';

const styles = {
  active: {
    display: 'block'
  },
  inactive: {
    display: 'none'
  }
};


const ContentBox = (props) => {
  return (
    <p className='wrapper'>
      {parseText(props.content)}
    </p>
  );
};

ContentBox.propTypes = {
  content: PropTypes.string.isRequired
};

const ToggleableComponent = (WrappedComponent) => {
  return class InnerComponemt extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        toggled: false
      };
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        toggled: !this.state.toggled
      });
    }

    render() {
      const stateStyle = this.state.toggled ? styles.active : styles.inactive;

      return (
        <WrappedComponent {...this.props}
          style={stateStyle}
          onClick={this.toggle} />
      );
    }
  };
};

const RenalDoseAdjustments = (props) => {
  return (
    <div className='wrapper'>

      <h3>
        <a onClick={props.onClick}>
          Renal Dose Information
        </a>
      </h3>
      <div style={props.style}>
        <ContentBox content={props.content} />
      </div>
    </div>
  );
};

  RenalDoseAdjustments.propTypes = {
  content: PropTypes.string.isRequired,
  style:   PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

const LiverDoseAdjustments = ({ content, status = false }) => {
  const stateStyle = status ? styles.active : styles.inactive;

  return (
    <div className='wrapper'>
      <span className='point open'
        style={stateStyle}>+</span>
      <span className='point open'
        style={stateStyle}>-</span>

      <h3>Renal Dose Information</h3>
      <div className='wrapper'>
        {parseText(content)}
      </div>
    </div>
  );
};

LiverDoseAdjustments.propTypes = {
  text:   PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

const DoseAdjustments = ({ text, status = false }) => {
  const stateStyle = status ? styles.active : styles.inactive;

  return (
    <div className='wrapper'>
      <span className='point open'
        style={stateStyle}>+</span>
      <span className='point open'
        style={stateStyle}>-</span>

      <h3>Renal Dose Information</h3>
      <div className='wrapper'>
        {parseText(text)}
      </div>
    </div>
  );
};

DoseAdjustments.propTypes = {
  text:   PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

const Precautions = ({ text, status = false }) => {
  const stateStyle = status ? styles.active : styles.inactive;

  return (
    <div className='wrapper'>
      <span className='point open'
        style={stateStyle}>+</span>
      <span className='point open'
        style={stateStyle}>-</span>

      <h3>Renal Dose Information</h3>
      <div className='wrapper'>
        {parseText(text)}
      </div>
    </div>
    );
};

Precautions.propTypes = {
  text:   PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

const Dialysis = ({ text, status = false }) => {
  const stateStyle = status ? styles.active : styles.inactive;

  return (
    <div className='wrapper'>
      <span className='point open'
        style={stateStyle}>+</span>
      <span className='point open'
        style={stateStyle}>-</span>

      <h3>Renal Dose Information</h3>
      <div className='wrapper'>
        {parseText(text)}
      </div>
    </div>
  );
};

Dialysis.propTypes = {
  text:   PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

const OtherComments = ({ text, status = false }) => {
  const stateStyle = status ? styles.active : styles.inactive;

  return (
    <div className='wrapper'>
      <span className='point open'
        style={stateStyle}>+</span>
      <span className='point open'
        style={stateStyle}>-</span>

      <h3>Renal Dose Information</h3>
      <div className='wrapper'>
        {parseText(text)}
      </div>
    </div>
  );
};

OtherComments.propTypes = {
  text:   PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

const Dosage = (props) => {
  const {
    renalDose,
    // liverDose,
    // doseAdjustments,
    // precautions,
    // dialysis,
    // otherComments
    } = props;

    const WrappedRenalDoseAdjustments = ToggleableComponent(RenalDoseAdjustments);

    return (
    <div className='wrapper'>
      <h1>Dosage Information</h1>

      { renalDose && <WrappedRenalDoseAdjustments {...renalDose} /> }
      {/* { liverDose && <LiverDoseAdjustments /> } */}
      {/* { doseAdjustments && <DoseAdjustments /> } */}
      {/* { precautions && <Precautions /> } */}
      {/* { dialysis && <Dialysis /> } */}
      {/* { otherComments && <OtherComments /> } */}
    </div>
  );
};

Dosage.propTypes = {
  renalDose:       PropTypes.object,
  liverDose:       PropTypes.string,
  doseAdjustments: PropTypes.string,
  precautions:     PropTypes.string,
  dialysis:        PropTypes.string,
  otherComments:   PropTypes.string
};

export default Dosage;
