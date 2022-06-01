import {takeEvery, put, call} from "redux-saga/effects"
import {GET_SHIPS} from "./actions/types";
import {getShipsList, showLoader} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(GET_SHIPS, sagaWorker)
}

function* sagaWorker() {
  yield put(showLoader())
  const payload = yield call(requestShips)
  yield put(getShipsList(payload))
}

async function requestShips() {
  const response = await fetch('https://api.spacexdata.com/v3/ships')
  return await response.json()
}