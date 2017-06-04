import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCourse } from '../../reducer/courses/actions';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: { title: '' }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onSubmit(event) {
    event.preventDefault();
    const { course } = this.state;
    this.props.createCourse(course);
    this.setState({ course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    console.log(this.props);

    return (
      <div className=''>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}

        <h2>Add Course</h2>

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

CoursePage.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  courses: PropTypes.array,
  createCourse: PropTypes.func
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
