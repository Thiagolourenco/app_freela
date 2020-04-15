import produce from 'immer';

const INITIAL_STATE = {
  userAdmin: [],
  loading: false,
  loadingGet: false,
  error: null,
};

export default function admin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.payload) {
      case '@admin/ADMIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@admin/ADMIN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@admin/ADMIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@admin/GET_ADMIN_REQUEST': {
        draft.loadingGet = true;
        break;
      }
      case '@admin/GET_ADMIN_SUCCESS': {
        draft.loadingGet = false;
        draft.userAdmin = action.payload.userAdmin;
        break;
      }
      case '@admin/GET_ADMIN_FAILURE': {
        draft.loadingGet = false;
        break;
      }
    }
  });
}
