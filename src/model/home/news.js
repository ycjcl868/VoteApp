
import * as apiService from '../../services/api';

export default {
  namespace: 'news',
  state: {
    logs: [],
    status: -1,
  },
  reducers: {
    getLogs(state, { payload: { status, logs } }) {
      return {
        ...state,
        status,
        logs,
      };
    },
  },
  effects: {
    * fetchLogs({ payload }, { call, put }) {
      const { data: { status, logs } } = yield call(apiService.getLogs);
      yield put({
        type: 'getLogs',
        payload: {
          status,
          logs,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'fetchLogs',
      });
    },
  },
};
