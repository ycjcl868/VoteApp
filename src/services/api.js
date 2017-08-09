import request from '../utils/request';

export function getMovie() {
  return request('/api/v1/movies', {
    method: 'GET',
  });
}

export function getLogNum() {
  return request('/api/v1/logNum', {
    method: 'GET',
  });
}
