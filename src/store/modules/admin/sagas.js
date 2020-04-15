import {call, put, takeLatest, all} from 'redux-saga/effects';

import {getAdminSuccess, adminSuccess} from './actions';

import api from '../../../services/api';

export function* adminAdd({payload}) {
  try {
    const {data} = payload;
    console.log('DATA', data);
  } catch (error) {
    console.log('ERROR => ', error);
  }
}

export function* getAdminInfo({payload}) {
  try {
    const response = yield call(api.get, 'admin');

    console.log(response.data);
    yield put(getAdminSuccess(response.data));
  } catch (error) {
    console.log('ERROR', error);
  }
}

export default all([
  takeLatest('@admin/ADMIN_REQUEST', adminAdd),
  takeLatest('@admin/GET_ADMIN_REQUEST', getAdminInfo),
]);
