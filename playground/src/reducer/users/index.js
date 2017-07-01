import {
  FETCH_EMPLOYEE,
  SELECTED_EMPLOYEE,
  RESET_EMPLOYEE_LIST
} from './constants';

const initialState = {
  employees: [],
  selectedEmployee: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return Object.assign({}, state, { employees: action.payload });

    case SELECTED_EMPLOYEE:
      return Object.assign({}, state, { selectedEmployee: action.payload });

    case RESET_EMPLOYEE_LIST:
      return initialState;

    default:
      return initialState;
  }
};
