import {
  CREATE_COURSE,
  FETCH_COURSES_SUCCESS
} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.courses;

    case CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
};
