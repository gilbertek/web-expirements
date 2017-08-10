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

      console.log('ModalWrapper::PROPS::', this.props);
      console.log('ModalWrapper::STATE::', this.state);
      console.log('ModalWrapper::Component::', WrappedComponent);
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
