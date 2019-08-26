import {
  FETCH_ORDER,
  FAIL_ORDER,
} from '../constants/actions';

const initState = {
  error: null,
};

function orderReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ORDER: {
      return { ...state, error: null };
    }
    case FAIL_ORDER: {
      return { ...state, error: action.payload.message };
    }
    default:
      return state;
  }
}

export default orderReducer;
