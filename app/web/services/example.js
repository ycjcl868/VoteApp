import request from '../utils/request';

export async function query() {
  return request('https://easy-mock.com/mock/590a821d7a878d73716eb5c7/example/getAnswer');
}
