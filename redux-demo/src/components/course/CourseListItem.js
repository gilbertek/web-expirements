import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListItem = ({ course }) => {
  return (
    <tr>
      <td>
        <a href={course.watchHref}
          target='_blank'
          rel='noopener noreferrer'>
          Watch
        </a>
      </td>
      <td>
        <Link
          to={`/course/${course.id}`}>
          {course.id}
        </Link>
      </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListItem;
