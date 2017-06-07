import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { loadAuthors } from '../../reducer/authors/actions';

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: [],
      errors: {}
    };
  }

  componentDidMount() {
    const { loadAuthors } = this.props;
    loadAuthors();
  }

  render() {
    return (
      <div className='manage-course-page'>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={this.props.authors} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func,
  errors: PropTypes.object
};

const mapStateToProps = (state) => {
  const course = {
                  id: '',
                  watchHref: '',
                  title: '',
                  authorId: '',
                  length: '',
                  category: ''
              };

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
    loadAuthors: () => dispatch(loadAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
