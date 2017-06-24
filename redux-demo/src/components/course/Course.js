import  React from 'react';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';

const Course = (props) => {
  const { course, errors = {}, authors = [], updateCourseFunc, saveCourseFunc } = props;
  return (
    <div className='manage-course-page'>
      <CourseForm
        course={course}
        errors={errors}
        allAuthors={authors}
        onChange={updateCourseFunc}
        onSave={saveCourseFunc} />
    </div>
  );
};

Course.propTypes = {
  course:           PropTypes.object.isRequired,
  authors:          PropTypes.array.isRequired,
  errors:           PropTypes.object.isRequired,
  loadAuthors:      PropTypes.func,
  saveCourseFunc:   PropTypes.func.isRequired,
  updateCourseFunc: PropTypes.func.isRequired,
};

export default Course;
