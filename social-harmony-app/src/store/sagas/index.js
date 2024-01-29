import { all, fork } from "redux-saga/effects";
import auth from "./authSaga";
import video from './videoSaga'

export default function* root() {
  yield all([fork(auth)]);
  yield all([fork(video)]);
}
