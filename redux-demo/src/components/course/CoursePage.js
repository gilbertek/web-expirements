import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CourseList from './CourseList';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: { title: '' },
      courses: []
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    return <Redirect to={{ pathname: '/course' }} />;
  }


  render() {
    const { courses } = this.props;

    return (
      <div className=''>
        <h1>Courses</h1>

        <input
          type='submit'
          value='Add Course'
          className='btn btn-primary'
          onClick={this.redirectToAddCoursePage} />

        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: (course) => dispatch(createCourse(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
