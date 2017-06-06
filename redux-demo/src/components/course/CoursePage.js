import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseList from './CourseList';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: { title: '' },
      courses: []
    };
  }

  render() {
    const { courses } = this.props;

    return (
      <div className=''>
        <h1>Courses</h1>
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
