import thunk from 'redux-thunk'
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import expect from 'expect';
import {
  CREATE_COURSE_SUCCESS,
  FETCH_COURSES_SUCCESS,
  createCourseSuccess,
  fetchCoursesSuccess
} from '../../../src/reducer/courses/actions';

// Test a syn action
describe('Course Actions', () => {
  describe('CreateCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // setups
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: CREATE_COURSE_SUCCESS,
        course
      };

      // Tests
      const action = createCourseSuccess(course);

      // assertions
      expect(action).toEqual(expectedAction);
    });
  });

});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and FETCH_COURSES_SUCCESS when loading courses', (done) => {
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, { body: { courses: [{ id: 1, title: 'Redux' }] } })

    const expectedActions = [
      // { type: BEGIN_AJAX_CALL },
      { type: FETCH_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clen Code' }] } }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    // store.dispatch(fetchCoursesSuccess()).then(() => {
    //   const actions = store.getActions();
    //   expect(actions[0].type).toEqual(FETCH_COURSES_SUCCESS);
    //   done();
    // });
  });

});

