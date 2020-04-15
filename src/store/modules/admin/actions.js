export function adminRequest(data) {
  return {
    type: '@admin/ADMIN_REQUEST',
    payload: {data},
  };
}

export function adminSuccess() {
  return {
    type: '@admin/ADMIN_SUCCESS',
  };
}

export function adminFailure() {
  return {
    type: '@admin/ADMIN_FAILURE',
  };
}

// GET
export function getAdminRequest() {
  return {
    type: '@admin/GET_ADMIN_REQUEST',
  };
}

export function getAdminSuccess(userAdmin) {
  return {
    type: '@admin/GET_ADMIN_SUCCESS',
    payload: {userAdmin},
  };
}

export function getAdminFailure() {
  return {
    type: '@admin/GET_ADMIN_FAILURE',
  };
}
// data.append('file', file);
// data.append('name', name);
// data.append('email', email);
// data.append('description', description);
// data.append('country', country);
// data.append('sports', sports);
