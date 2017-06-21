import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
// import styles from './CourseFormCourseForm.css';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
  return (
    <div className='course-form'>
      <form>
        <h1>Manage Course</h1>

        <TextInput
          name='title'
          label='Title'
          onChange={onChange}
          value={course.title}
          error={errors.title}/>

        <SelectInput
          name='authorId'
          label='Author'
          value={course.authorId}
          defaultOption='Select Author'
          options={allAuthors}
          onChange={onChange}
          error={errors.authorId} />

        <TextInput
          name='category'
          label='Category'
          onChange={onChange}
          value={course.category}
          error={errors.category}/>

        <TextInput
          name='length'
          label='Length'
          onChange={onChange}
          value={course.length}
          error={errors.length}/>

        <input
          type='submit'
          disabled={saving}
          value={saving ? 'Saving' : 'Save'}
          className='btn btn-primary'
          onClick={onSave} />
      </form>
    </div>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
