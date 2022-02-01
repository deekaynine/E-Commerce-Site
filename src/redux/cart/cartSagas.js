import { all, call, takeLatest, put } from "redux-saga/effects";

import userConstType from "../user/userConst";
import { clearCart } from "./cartActions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(userConstType.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
