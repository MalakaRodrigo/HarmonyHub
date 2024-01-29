import { all, call, put, takeLatest } from "redux-saga/effects";
import envConfig from "../../config";
import { uplaodVideoFeed } from "../routines";
import { request } from "../../common/util/RestClient.js";


export function* SendVideoSaga({ payload }) {
  try {
    const config = {
      method: 'POST',
      payload: payload,
    };
    const URL = `${envConfig.APIG_URL}/api/v1/videos/`;


    const response = yield call(request, URL, config);
    const { data } = response;
    yield put(uplaodVideoFeed.success(data))
  } catch (error) {
    yield put(uplaodVideoFeed.failure({ error, noAlert: true }));
  }
}

export default function* root() {
  yield all([takeLatest(uplaodVideoFeed.TRIGGER, SendVideoSaga)]);
}
