import React from 'react';
import PropTypes from 'prop-types';
import CourseListItem from './CourseListItem';

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div className='course-list'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course =>
            <CourseListItem
              key={course.id}
              course={course} />
          )}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func
};

export default CourseList;
