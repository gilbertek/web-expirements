import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push, dispatch } from 'react-router-redux';
import CourseForm from './CourseForm';
import { loadAuthors } from '../../reducer/authors/actions';
import { saveCourse } from '../../reducer/courses/actions';

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: [],
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentDidMount() {
    const { loadAuthors } = this.props;
    loadAuthors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course });
  }

  saveCourse(event) {
    event.preventDefault();

    const { saveCourse } = this.props;
    saveCourse(this.state.course);

    // dispatch(push('/courses'));
  }

  render() {
    return (
      <div className='manage-course-page'>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func,
  saveCourse: PropTypes.func,
  errors: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  return course ? course[0] : null;
}

const mapStateToProps = (state, { match }) => {

  const courseId = match.params.id; // From the path `course/:id`
  let course = {
                  id: '',
                  watchHref: '',
                  title: '',
                  authorId: '',
                  length: '',
                  category: ''
              };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course,
    authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAuthors: () => dispatch(loadAuthors()),
    saveCourse: (course) => dispatch(saveCourse(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
