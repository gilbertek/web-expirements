import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import styles from './ManageCoursePage.css';

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='manage-course-page'>
        <h1>
          Manage Courses
        </h1>

        <input
          type='text'
          onChange={this.onChange}
          value={this.state.course.title} />

        <input
          type='submit'
          value='Save'
          onClick={this.onSubmit} />
      </div>
    );
  }
}

ManageCoursePage.PropTypes = {

};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
