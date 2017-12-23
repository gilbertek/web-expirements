import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = (WrappedComponent, params) => {
  return class InnerComponemt extends Component {
    static propTypes = {
      children: PropTypes.node
    }

    constructor(props) {
      super(props);
      this.state = {
        ...params
      };
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

ModalWrapper.propTypes = {
  children: PropTypes.node
};

export default ModalWrapper;
