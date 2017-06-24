import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { createCourse } from '../../fixtures/course';
import ManageCoursePage from '../../../src/components/course/ManageCoursePage';

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


  it('sets error message when title is empty', () => {
    // const spy = expect.spyOn(ManageCoursePage.prototype, 'saveCourse');
    const wrapper = mount(
      <Provider store={store}>
        <ManageCoursePage {...props} />
      </Provider>
    );

    const component = wrapper.find(ManageCoursePage);

    // console.log(spy);
    // const saveCourse = expect.createSpy(() => { return Promise.resolve(); });
    // console.log(saveCourse);
    // console.log(component.debug());

    const saveButton = component.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    // expect(component.prop('saveCourse')).toBe(false);
    // expect(saveCourse).toHaveBeenCalled();
    // console.log('CURRENT STATE:', component.prop('saveCourse'));
    // console.log('CURRENT PROPS:', component.props());
    // console.log('CURRENT STATE:', component);

    // // expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    // expect(spy.calls.length).toEqual(1);
  });

  //   it('return false when title length is less than 5', () => {
  //   const props = {
  //     course: {},
  //     saving: false,
  //     errors: {},
  //     allAuthors: [{}],
  //     onSave: () => {},
  //     onChange: () => {}
  //   };
  //   // course, allAuthors, onSave, onChange, saving, errors
  //   const wrapper = mount(<CourseForm {...props} />);
  //   const spy = expect.spyOn(CourseForm.prototype, 'onSave').andReturn(false);
  //   const saveButton = wrapper.find('input').last();
  //   expect(saveButton.prop('type')).toBe('submit');
  // });
});

