import * as apiService from '../../services/api';

export default {
  namespace: 'layout',
  state: {
    logNum: 0,
    status: -1,
  },
  reducers: {
    getLogNum(state, { payload: { status, number } }) {
      return {
        ...state,
        status,
        logNum: number,
      };
    },
  },
  effects: {
    * fetchLogNum({ payload }, { call, put }) {
      const { data: { status, number } } = yield call(apiService.getLogNum);
      yield put({
        type: 'getLogNum',
        payload: {
          status,
          number,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'fetchLogNum',
      });
    },
  },
};
