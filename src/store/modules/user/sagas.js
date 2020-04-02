import {takeLatest, all, call, put} from 'redux-saga/effects';

import {userSuccess} from './actions';
import api from '../../../services/api';

export function* user({payload}) {
  try {
    const {idToken, name, email, photoUrl} = payload;

    yield call(api.post, 'user', idToken, name, email, photoUrl);

    yield put(userSuccess());
    console.log('OK', idToken, name, email, photoUrl);
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest('@user/USER_REQUEST', user)]);
