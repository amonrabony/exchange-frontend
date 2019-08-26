import {
  FETCH_LOGOUT,
  FAIL_LOGOUT,
  FETCH_LOGIN,
  FAIL_LOGIN,
  FETCH_SIGN_UP,
  FAIL_SIGN_UP,
} from '../constants/actions';


export const fetchLogout = () => {
  return { type: FETCH_LOGOUT };
};

export const failLogout = message => {
  return { type: FAIL_LOGOUT, payload: { message } };
};

export const fetchLogin = (email, password) => {
  return { type: FETCH_LOGIN, payload: { email, password } };
};

export const failLogin = message => {
  return { type: FAIL_LOGIN, payload: { message } };
};

export const fetchSignUp = (email, password) => {
  return { type: FETCH_SIGN_UP, payload: { email, password } };
};

export const failSignUp = message => {
  return { type: FAIL_SIGN_UP, payload: { message } };
};