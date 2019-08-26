import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
import { fetchTradingSaga } from './trading';
import { fetchHistorySaga } from './history';
import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga } from './auth';
import { fetchOrderSaga } from './order';


export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchWalletSaga(),
    setActiveWalletSaga(),
    fetchWalletAddressSaga(),
    fetchTradingSaga(),
    fetchHistorySaga(),
    fetchSubmitWithdrawSaga(),
    fetchLogoutSaga(),
    fetchLoginSaga(),
    fetchOrderSaga(),
  ]);
}