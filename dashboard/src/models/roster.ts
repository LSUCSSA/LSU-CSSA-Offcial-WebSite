import {getPositionList, getRoster, removeMembers, updateMember} from '@/services/roster';
import {Effect, Reducer} from "umi";

export interface MemberType {
  confirmed: boolean,
  blocked: boolean,
  position: string,
  department: string,
  points: number,
  name: string,
  username: string,
  email: string,
  provider: string,
}

export interface StateType {
  positionList: {
    position: Array<string>;
    department: Array<string>;
  },
  roster: Array<MemberType>
  removeMemberStatus: boolean
}
export interface RosterModelType {
  namespace: string;
  state: StateType;
  effects: {
    getPositionList: Effect;
    getRosters: Effect;
    removeMembers: Effect;
    updateMember: Effect;
  };
  reducers: {
    setPositionList: Reducer<StateType>;
    setRoster: Reducer<StateType>;
  };
}

const rosterModel: RosterModelType = {
  namespace: 'roster',
  state: {
    positionList: {
      position: [],
      department: []
    },
    roster: [],
    removeMemberStatus: false,
  },
  effects: {
    * getPositionList(_, {call, put}) {
      const response = yield call(getPositionList);
      yield put({
        type: 'setPositionList',
        payload: response,
      });
    },
    * getRosters(_, {call, put}) {
      const response = yield call(getRoster, {_sort: 'points:DESC'});
      yield put({
        type: 'setRoster',
        payload: response,
      });
    },
    * removeMembers({ payload },{call,put}){
      const response = yield call(removeMembers, payload);
      yield put({
        type: 'setRemoveMemberStatus',
        payload: response
      })
    },
    *updateMember({ payload }, {call}){
      yield call(updateMember, payload.id, {...payload});
    }
  },
  reducers: {
    setPositionList(state: StateType, {payload, type}) {
      return {...state, positionList: payload, type};
    },
    setRoster(state: StateType, {payload, type}) {
      return {...state, roster: payload, type};
    },
    setRemoveMemberStatus(state: StateType, {payload, type}){
      return {...state, removeMemberStatus: payload, type};
    }
  },
};
export default rosterModel;
