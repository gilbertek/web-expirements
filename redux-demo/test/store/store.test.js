import expect from 'expect';
import { createStore } from 'redux';
import reducer from '../../src/reducer';
import { createCourseSuccess } from '../../src/reducer/courses/actions';

describe('Store', () => {
  it('should handle creating courses', () => {
    // Setups
    const store = createStore(reducer, {});
    const course = { title: 'Clean Code' };

    // Test
    const action = createCourseSuccess(course);
    store.dispatch(action);

    // Assertions
    const actual = store.getState().courses[0];
    const expected = { title: 'Clean Code' };
    expect(actual).toEqual(expected);
  });
});


