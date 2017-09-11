import * as apiService from '../../services/api';

export default {
  namespace: 'index',
  state: {
    movies: [],
    logNum: 0,
    status: -1,
  },
  reducers: {
    getMovie(state, { payload: { status, list } }) {
      return {
        ...state,
        status,
        movies: list,
      };
    },
    getLogNum(state, { payload: { status, number } }) {
      return {
        ...state,
        status,
        logNum: number,
      };
    },
  },
  effects: {
    * fetchMovie({ payload }, { call, put }) {
      const { data: { status, list } } = yield call(apiService.getMovie);
      yield put({
        type: 'getMovie',
        payload: {
          status,
          list,
        },
      });
    },
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
        type: 'fetchMovie',
      });
      dispatch({
        type: 'fetchLogNum',
      });
    },
  },
};
