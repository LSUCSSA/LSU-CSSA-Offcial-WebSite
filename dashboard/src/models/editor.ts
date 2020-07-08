import {getSponsorComp, setSponsorComp} from '@/services/editor';
import {Effect, Reducer} from "umi";

export interface SponsorCompType {
  sponsorsList: {
    numRow: number,
    numCol: number,
    fileData: object|null,
  },
}


export interface EditorModelType {
  namespace: string;
  state: SponsorCompType;
  effects: {
    getSponsorList: Effect;
    uploadSponsorList: Effect;
  };
  reducers: {
    setSponsorList: Reducer<SponsorCompType>;
  };
}

const editorModel: EditorModelType = {
  namespace: 'editor',
  state: {
    sponsorsList: {
      numRow: 3,
      numCol: 3,
      fileData: null,
    },
  },
  effects: {
    *getSponsorList(_, {call, put}) {
      const response = yield call(getSponsorComp);
      yield put({
        type: 'setSponsorList',
        payload: response,
      });
    },
    *uploadSponsorList({ payload }, {call, put}) {
      const response = yield call(setSponsorComp, payload);
      yield put({
        type: 'setSponsorList',
        payload:  response,
      });
    },
  },
  reducers: {
    setSponsorList(state: SponsorCompType, {payload, type}) {
      return {...state, sponsorsList: JSON.parse(payload.sponsorsList), type};
    },
  },
};
export default editorModel;
