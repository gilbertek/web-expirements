import {
  FETCH_AUTHORS_SUCCESS
} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
