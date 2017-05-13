import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from './constants';

// Actions
const setLoginPending = (isLoginPending) => ({
    type: SET_LOGIN_PENDING, isLoginPending });

const setLoginSuccess = (isLoginSuccess) => ({
    type: SET_LOGIN_SUCCESS, isLoginSuccess });

const setLoginError = (loginError) => ({
    type: SET_LOGIN_ERROR, loginError });


export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));

      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

