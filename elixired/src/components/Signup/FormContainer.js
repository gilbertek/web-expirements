import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = () => (
  <div className='card card-inverse card-primary text-center'>
    <div className='card-block'>
      <h3>Welcome to a Brave New World</h3>
    </div>
  </div>
);

const FormContainer = ({ children }) => {
  return (
    <div className='row'>
      <div className='column'>
        <FormHeader />

        <form>
          {children}
        </form>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContainer;
