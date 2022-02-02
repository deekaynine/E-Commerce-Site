import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSagas";

export default function* rootSaga() {
  //"all" initializes all sagas on different task streams
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
