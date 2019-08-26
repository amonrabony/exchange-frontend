import {
  FETCH_LOGOUT,
  FAIL_LOGOUT,
  FETCH_LOGIN,
  FAIL_LOGIN,
  FETCH_SIGN_UP,
  FAIL_SIGN_UP,
} from '../constants/actions';

const initState = {
  errorLogin: null,
  errorLogout: null,
  errorSignUp: null,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_LOGOUT: {
      return { ...state };
    }
    case FAIL_LOGOUT: {
      return { ...state, errorLogout: action.payload.message };
    }
    case FETCH_LOGIN: {
      return { ...state, errorLogin: null };
    }
    case FAIL_LOGIN: {
      return { ...state, errorLogin: action.payload.message };
    }
    case FETCH_SIGN_UP: {
      return { ...state, errorSignUp: null };
    }
    case FAIL_SIGN_UP: {
      return { ...state, errorSignUp: action.payload.message };
    }
    default:
      return state;
  }
}

export default authReducer;
