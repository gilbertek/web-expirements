import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { ManageCoursePage } from '../../../src/components/course/ManageCoursePage';
import CourseForm from '../../../src/components/course/CourseForm';

describe('<ManageCoursePage /> Component', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ courses: [], authors: [] });

  const props = {
    authors: [{ id: 1, firstName: 'Fake', lastName: 'Teacher' }],
    course: {
      id: '',
      watchHref: '',
      title: '',
      authorId: '',
      length: '',
      category: ''
    },
    saveCourse: () => { return Promise.resolve(); },
    loadAuthors: () => { return Promise.resolve(); },
    match: { params: { id: 'clean-code' } }
  };

  it('should contains a course form component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ManageCoursePage {...props} />
      </Provider>
    );
    const courseForm = wrapper.find(CourseForm);
    expect(courseForm.length).toBe(1);
  });

  it('sets error message when title is empty', () => {
    const spy = expect.spyOn(
      ManageCoursePage.prototype, 'saveCourse'
    ).andCallThrough();
    const wrapper = mount(
      <Provider store={store}>
        <ManageCoursePage {...props} />
      </Provider>
    );
    const courseForm = wrapper.find(CourseForm);
    const saveButton = courseForm.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(courseForm.find('.alert').text()).toBe('Title must be at least 5 characters.');
  });
});

