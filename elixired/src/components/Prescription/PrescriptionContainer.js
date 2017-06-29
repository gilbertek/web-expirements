import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrescriptionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <h1>Prescription</h1>
      </div>
    );
  }
}

PrescriptionContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default PrescriptionContainer;
