import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PayerComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log('PAYERCOMPONENT::PROPS::', this.props.payer);
    const { payer } = this.props.payer;

    return (
      <div className='wrapper'>
        <p>{payer.formulary_status}</p>
      </div>
    );
  }
}

export default PayerComponent;
