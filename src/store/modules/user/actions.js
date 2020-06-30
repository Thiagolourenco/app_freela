export function userRequest(userInfo, navigation) {
  return {
    type: '@user/USER_REQUEST',
    payload: {userInfo, navigation},
  };
}

export function userSuccess(data) {
  return {
    type: '@user/USER_SUCCESS',
    payload: {data},
  };
}

export function userFailure() {
  return {
    type: '@user/USER_FAILURE',
  };
}
