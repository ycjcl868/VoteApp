
import * as apiServer from '../../services/api';

export default {
  namespace: 'summary',
  state: {
    data: [],
    status: -1,
  },
  reducers: {
    getSummary(state, { payload: { status, data } }) {
      return {
        ...state,
        status,
        data,
      };
    },
  },
  effects: {
    * fetchSummary({ payload }, { call, put }) {
      const { data: { status, data } } = yield call(apiServer.getSummary);
      console.log(data);
      yield put({
        type: 'getSummary',
        payload: {
          status,
          data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'fetchSummary',
      });
    },
  },
};
