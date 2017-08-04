import request from '../utils/request';

export function getMovie() {
  return request('/api/getMovie');
}

export function getLogNum() {
  return request('/api/getLogNum');
}
