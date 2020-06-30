import {takeLatest, all, call, put} from 'redux-saga/effects';

import {userSuccess} from './actions';
import api from '../../../services/api';

export function* user({payload}) {
  try {
    const {userInfo, navigation} = payload;
    const {name, email, photo} = userInfo;

    const userInfoData = {
      name: name,
      email: email,
      photo: photo,
    };

    const response = yield call(api.post, 'users', userInfoData);

    yield put(userSuccess(response.data));

    navigation.navigate('Home');
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest('@user/USER_REQUEST', user)]);
