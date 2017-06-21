import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from '../../../src/components/course/ManageCoursePage';

describe('<ManageCoursePage /> Component', () => {
  it('sets error message when title is empty', () => {
    const props = {
      authors: [],
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      },
      saveCourse: () => { return Promise.resolve(); }
    };

    // const wrapper = mount(<ManageCoursePage {...props} />);
    // const saveButton = wrapper.find('input').last();
    // console.log(saveButton);
  });

});

