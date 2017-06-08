import {
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  FETCH_COURSES_SUCCESS
} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.courses;

    case CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
};
