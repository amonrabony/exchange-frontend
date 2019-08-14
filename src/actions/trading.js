import {
  FETCH_TRADING_DATA,
  SUCCESS_TRADING_DATA,
  FAIL_TRADING_DATA,
} from '../constants/actions';

export const fetchTradingData = () => {
  return { type: FETCH_TRADING_DATA };
};

export const successTradingData = data => {
  return { type: SUCCESS_TRADING_DATA, payload: { data } };
};

export const failTradingData = () => {
  return { type: FAIL_TRADING_DATA };
};
