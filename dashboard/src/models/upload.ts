import { uploadRoster } from '@/services/upload';
import {Effect, Reducer} from "umi";

export interface StateType {
  file: undefined | object,
  roster: Array<object>
}

export interface UploadModelType {
  namespace: string;
  state: StateType;
  effects: {
    upload: Effect;
  };
  reducers: {
    setUpload: Reducer<StateType>;
    saveCurrentUser: Reducer<StateType>;
    changeNotifyCount: Reducer<StateType>;
  };
}
const UploadModel: UploadModelType = {
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
