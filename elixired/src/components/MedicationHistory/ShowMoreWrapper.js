import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  rightAlign: {
    float: 'right'
  },

  fullWidth: {
    width:        '100%',
    marginTop:    '12px',
    marginBottom: '28px'
  }
};

const ShowMoreWrapper = ({ toggle, onClick }) =>
  (
    <div className='show-more-wrapper'
      style={styles.fullWidth}>
      { toggle
        ? <a style={styles.rightAlign}
            onClick={onClick}>Show less</a>
        : <a style={styles.rightAlign}
            onClick={onClick}>View additional medication history</a>
      }
    </div>
  );

ShowMoreWrapper.propTypes = {
  toggle:  PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ShowMoreWrapper;
