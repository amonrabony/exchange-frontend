import {
  FETCH_ORDER,
  FAIL_ORDER,
} from '../constants/actions';

export const fetchOrder = (price, amount, type) => {
  return { type: FETCH_ORDER, payload: { price, amount, type } };
};

export const failOrder = message => {
  return { type: FAIL_ORDER, payload: { message } };
};
