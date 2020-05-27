import { uploadRoster } from '@/services/upload';

const UploadModel = {
  namespace: 'upload',
  state: {
    file: undefined,
  },
  effects: {
    *upload({ payload }, { call, put }) {
      const response = yield call(uploadRoster, payload);
      yield put({
        type: 'upload',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UploadModel;
