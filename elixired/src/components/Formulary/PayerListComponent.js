import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PayerComponent from './PayerComponent';

class PayerListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payers: []
    };
  }

  render() {
    // TODO: Need sample data to implement this.
    // Also need to discuss with James, way to tag primamry PBM
    if (this.props.payers.length > 1) {
      return (
        <p>Multiple Payers</p>
      );
    }

    return (
      <div className='wrapper'>
        <PayerComponent payer={this.props.payers[0]} />
      </div>
    );
  }
}

const propTypes = {
  payers: PropTypes.array.isRequired
};

PayerListComponent.propTypes = propTypes;

export default PayerListComponent;
