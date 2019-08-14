import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/trading';
import * as types from '../constants/actions';
import { getData } from '../api/trading';

function* fetchTradingData() {
  try {
    const data = yield call(getData);
    yield put(actions.successTradingData(data));
  } catch (e) {
    yield put(actions.failTradingData());
  }
}

export function* fetchTradingSaga() {
  yield takeEvery(types.FETCH_TRADING_DATA, fetchTradingData);
}