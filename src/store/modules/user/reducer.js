import produce from 'immer';

const INITIAL_STATE = {
  userInfo: [],
  error: null,
  loading: false,
  mensagem: '',
};

export default function sendmessage(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/USER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/USER_SUCCESS': {
        draft.loading = false;
        draft.userInfo = action.payload.data;
        break;
      }
      case '@user/USER_FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
