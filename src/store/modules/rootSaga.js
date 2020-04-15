import {all} from 'redux-saga/effects';

import user from './user/sagas';
import admin from './admin/sagas';

export default function* rootSaga() {
  return yield all([user, admin]);
}
