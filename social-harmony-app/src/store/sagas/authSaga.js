import { all, call, put, takeLatest } from "redux-saga/effects";
import envConfig from "../../config";
import { logIn, signUp } from "../routines";
import { request } from "../../common/util/RestClient.js";

export function* logInSaga({ payload }) {
  try {
    const config = {
      method: 'POST',
      payload: payload,
    };
    const URL = `${envConfig.APIG_URL}api/v1/users/`;


    const response = yield call(request, URL, config);
    const { data } = response;

    yield put(logIn.success(data));
  } catch (error) {
    yield put(logIn.failure({ error, noAlert: true }));
  }
}

export function* SignUpSaga({ payload }) {
  try {
    const config = {
      method: 'POST',
      payload: payload,
    };
    const URL = `${envConfig.APIG_URL}api/v1/users/create`;


    const response = yield call(request, URL, config);
    const { data } = response;

    yield put(signUp.success(data));
  } catch (error) {
    yield put(signUp.failure({ error, noAlert: true }));
  }
}
export default function* root() {
  yield all([takeLatest(logIn.TRIGGER, logInSaga)]);
  yield all([takeLatest(signUp.TRIGGER, SignUpSaga)]);
}
