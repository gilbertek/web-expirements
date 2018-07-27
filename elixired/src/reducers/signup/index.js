import { combineReducers } from 'redux';
import {
  VALIDATE_START,
  VALIDATE_FAIL,
  VALIDATE_SUCCESS,
  SET_FIELD,
  RESET_FORM,
  SIGNUP_STARTED,
  SIGNUP_COMPLETED,
  SIGNUP_FAILED
} from './constants';

export const initialState = {
  profile: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
    touched: false
  },
  signup: {
    pending: false,
    completed: false,
    failed: false
  },

  validation: {
    pending: false,
    valid: false,
    error: {}
  }
};

const validationReducer = (state = initialState.validation, action) => {
  switch (action.type) {
    case VALIDATE_START:
      return {
        ...state,
        pending: true,
        valid: false
      };

    case VALIDATE_FAIL:
      return {
        ...state,
        pending: false,
        valid: false,
        error: action.payload
      };

    case VALIDATE_SUCCESS:
      return {
        ...state,
        pending: false,
        valid: true,
        error: {}
      };

    case RESET_FORM:
      return {
        pending: false,
        valid: false,
        error: {}
      };

    default:
      return state;
  }
};

const formSubmitReducer = (state = initialState.signup, action) => {
  switch (action.type) {
    case SIGNUP_STARTED:
      return {
        ...state,
        pending: true,
        completed: false,
        failed: false
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        pending: false,
        completed: false,
        failed: true
      };

    case SIGNUP_COMPLETED:
      return {
        ...state,
        pending: false,
        completed: true,
        failed: false
      };

    default:
      return state;
  }
};

const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case SET_FIELD:
      const { field, value } = action.payload;
      return {
        ...state,
        touched: true,
        [field]: value
      };

    case RESET_FORM:
      return {
        ...state,
        ...initialState.profile
      };

    default:
      return state;
  }
};

export default combineReducers({
  profile: profileReducer,
  formSubmit: formSubmitReducer,
  validation: validationReducer
});
