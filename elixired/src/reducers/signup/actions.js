import {
  VALIDATE,
  VALIDATE_START,
  VALIDATE_FAIL,
  VALIDATE_SUCCESS,
  SET_FIELD,
  RESET_FORM,
  SIGNUP_STARTED,
  SIGNUP_COMPLETED,
  SIGNUP_FAILED
} from './constants';

export const validateForm = formData => ({
  type: VALIDATE,
  payload: formData
});

export const validateFormStart = () => ({
  type: VALIDATE_START
});

export const validateFormFail = error => ({
  type: VALIDATE_FAIL,
  error: true,
  message: error.message || 'Something went wrong'
});

export const validateFormSuccess = payload => ({
  type: VALIDATE_SUCCESS,
  payload
});


