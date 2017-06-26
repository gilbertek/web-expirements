import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  checkboxGroup: {
    display: 'flex'
  },
  formLabel: {
    display:      'inline-block',
    lineHeight:   '1.2',
    marginBottom: '2px',
    cursor:       'pointer'
  },
  formCheckbox: {
    display:    'inline-flex',
    lineHeight: '2',
    margin:     '3px 4px 0 4px',
    width:      '15px'
  }
};

const CheckboxOrRadioGroup = (props) => (
  <div>
    <label htmlFor={props.title}
      className='form-label'>{props.title}</label>
    <div className='checkbox-group'
      style={styles.checkboxGroup}>
      {props.options.map(option => {
        return (
          <label htmlFor={option}
            key={option}
            className='form-label'
            style={styles.formLabel}>
            <input
              style={styles.formCheckbox}
              className='form-checkbox'
              name={props.setName}
              onChange={props.controlFunc}
              value={option}
              checked={props.selectedOptions.indexOf(option) > -1}
              type={props.type}
            /> {option}
          </label>
        );
      })}
    </div>
  </div>
);

CheckboxOrRadioGroup.propTypes = {
  title:           PropTypes.string.isRequired,
  type:            PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  setName:         PropTypes.string.isRequired,
  options:         PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc:     PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
