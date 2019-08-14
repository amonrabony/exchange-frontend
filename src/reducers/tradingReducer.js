import {
  FETCH_TRADING_DATA,
  SUCCESS_TRADING_DATA,
  FAIL_TRADING_DATA,
} from '../constants/actions';

const initState = {
  list: [],
  isFetching: false,
  error: false,
};

function tradingReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_TRADING_DATA: {
      return { ...state, isFetching: true };
    }
    case SUCCESS_TRADING_DATA: {
      return { ...state, isFetching: false, list: action.payload.data };
    }
    case FAIL_TRADING_DATA: {
      return { ...state, isFetching: false, error: true };
    }
    default: {
      return state;
    }
  }
}

export default tradingReducer;
