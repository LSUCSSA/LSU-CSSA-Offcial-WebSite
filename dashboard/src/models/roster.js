import { stringify } from 'querystring';
import { notification } from 'antd';
import { router } from 'umi';
import { getPositionList, getRoster } from '@/services/roster';
import { setAuthority, getAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const rosterModel = {
  namespace: 'roster',
  state: {
    positionList: { position: [], department: [] },
    roster: [],
  },
  effects: {
    *getPositionList(_, { call, put }) {
      const response = yield call(getPositionList);
      yield put({
        type: 'setPositionList',
        payload: response,
      }); // Login successfully
    },
    *getRosters(_, { call, put }) {
      const response = yield call(getRoster, { _sort: 'points:DESC' });
      yield put({
        type: 'setRoster',
        payload: response,
      }); // Login successfully
    },
  },
  reducers: {
    setPositionList(state, { payload, type }) {
      return { ...state, positionList: payload, type };
    },
    setRoster(state, { payload, type }) {
      return { ...state, roster: payload, type };
    },
  },
};
export default rosterModel;
