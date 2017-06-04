import { CREATE_COURSE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
};
