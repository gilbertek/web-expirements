import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularyContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <p>Hello!</p>
      </div>
    );
  }
}

FormularyContainer.propTypes = {
  children: PropTypes.node
};

export default FormularyContainer;
