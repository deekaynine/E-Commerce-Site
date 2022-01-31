import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
  //"all" initializes all sagas on different task streams
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
