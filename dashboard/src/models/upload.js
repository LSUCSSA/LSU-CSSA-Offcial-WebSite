import { uploadRoster } from '@/services/upload';

const UploadModel = {
  namespace: 'upload',
  state: {
    file: undefined,
    roster: [],
  },
  effects: {
    *upload({ payload }, { call, put }) {
      const response = yield call(uploadRoster, payload);
      yield put({
        type: 'setUpload',
        payload: response,
      });
    },
  },
  reducers: {
    setUpload(state, action) {
      return { ...state, roster: action.payload };
    },
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
