import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  active: {
    display: 'block'
  },
  inactive: {
    display: 'none'
  }
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
          {...this.state}
          style={stateStyle}
          onClick={this.toggle} />
      );
    }
  };
};

ToggleableComponent.propTypes = {
  children: PropTypes.node,
  toggled:  PropTypes.bool.isRequired
};

export default ToggleableComponent;
