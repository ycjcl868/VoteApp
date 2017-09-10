import * as apiService from '../services/api';

export default {
  namespace: 'admin',
  state: {
    status: -1,
    record: 1,
    current: 0,
    movies: [],
  },
  reducers: {
    getMovie(state, { payload: { status, list } }) {
      return {
        ...state,
        status,
        movies: list,
      };
    },
  },
  effects: {
    * fetchMovie({ payload }, { call, put }) {
      const { data: { status, list } } = yield call(apiService.getMovie);
      console.log('----admin movie list----------');
      console.log(list);
      yield put({
        type: 'getMovie',
        payload: {
          status,
          list,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log('--------history listen----------');
        console.log(pathname);
        if (pathname === '/dashboard/movie') {
          dispatch({
            type: 'fetchMovie',
          });
        }
      });
    },
  },
};
