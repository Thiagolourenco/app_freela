export function userRequest(idToken, name, email, photoUrl) {
  return {
    type: '@user/USER_REQUEST',
    payload: {idToken, name, email, photoUrl},
  };
}

export function userSuccess() {
  return {
    type: '@user/USER_SUCCESS',
  };
}

export function userFailure() {
  return {
    type: '@user/USER_FAILURE',
  };
}
