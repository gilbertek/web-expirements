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
    const wrapper = mount(
      <Provider store={store}>
        <ManageCoursePage
          course = { Object.assign({}, createCourse()) }
          authors = {[]}
          errors = { Object.assign({}, {}) }
          match = { { params: { id: '' } } } />
      </Provider>
    );

    console.log('CURRENT STATE:', wrapper.state());
    console.log('CURRENT PROPS:', wrapper.props());
    console.log(wrapper.debug());


    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

});

