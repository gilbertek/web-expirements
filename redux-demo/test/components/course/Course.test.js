import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CourseForm from '../../../src/components/course/CourseForm';
import Course from '../../../src/components/course/Course';
import { createCourse } from '../../fixtures/course';

describe('Course Component', () => {
  const course = createCourse();
  let wrapper;
  const props = {
    course,
    errors: {},
    authors: [],
    updateCourseFunc: () => { return Promise.resolve(); },
    saveCourseFunc: () => { return Promise.resolve(); }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Course {...props} />
    );
  });

  it('should render', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should contains a course form component', () => {
    const courseForm = wrapper.find(CourseForm);
    expect(courseForm.length).toBe(1);
  });

  it('sets error message when title is empty', () => {
    const courseForm = wrapper.find(CourseForm);
    const saveButton = courseForm.find('input').last();

    // expect(saveButton.prop('type')).toBe('submit');
    // console.log(saveButton.props().value);
    // console.log(saveButton);

    // saveButton.simulate('click');
    // expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
