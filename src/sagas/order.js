import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/order';
import * as types from '../constants/actions';
import { order } from '../api/order';

export function* fetchOrder({ payload: { price, amount, type } }) {
  try {
    yield call(order, price, amount, type);
  } catch (e) {
    yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* fetchOrderSaga() {
  yield takeEvery(types.FETCH_ORDER, fetchOrder);
}
