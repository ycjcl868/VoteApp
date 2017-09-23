'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');
const formstream = require('formstream');
const urllib = require('urllib');


describe('example logs test', () => {
  let app;
  let csrfToken;
  let cookies;
  let host;
  let server;

  before(function* () {
    app = mm.app();
    yield app.ready();
    server = app.listen();
  });

  after(() => app.close());
  it('should GET /upload to get csrf token', () => {
    return request(server)
      .get('/upload')
      .expect(200)
      .expect(res => {
        cookies = res.headers['set-cookie'].join(';');
        csrfToken = cookies.match(/csrfToken=(.*?);/)[1];
        host = `http://127.0.0.1:${server.address().port}`;
      });
  });

  it('should GET /api/v1/logs success', done => {
    urllib.request(`${host}/api/v1/logs`, {
      method: 'GET',
      dataType: 'json',
    }, (err, data, res) => {
      assert(!err, err && err.message);
      assert(res.statusCode === 200);
      assert(res.data.status > 0);
      done();
    });
  });

  it('should POST /api/vi/logs success', done => {
    const form = formstream();
    form.field('id', 'logs');
    const headers = form.headers();
    headers.Cookie = cookies;
    urllib.request(`${host}/api/v1/logs?_csrf=${csrfToken}`, {
      method: 'POST',
      headers,
      stream: form,
      dataType: 'json',
    }, (err, data, res) => {
      assert(!err, err && err.message);
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should PUT /api/v1/logs/:id success', done => {
    const form = formstream();
    form.field('id', 'logs');
    const headers = form.headers();
    headers.Cookie = cookies;
    urllib.request(`${host}/api/v1/logs/1?_csrf=${csrfToken}`, {
      method: 'PUT',
      headers,
      stream: form,
      dataType: 'json',
    }, (err, data, res) => {
      assert(!err, err && err.message);
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should DELETE /api/v1/logs/:id success', done => {
    const form = formstream();
    form.field('id', 'logs');
    const headers = form.headers();
    headers.Cookie = cookies;
    urllib.request(`${host}/api/v1/logs/1?_csrf=${csrfToken}`, {
      method: 'DELETE',
      headers,
      stream: form,
      dataType: 'json',
    }, (err, data, res) => {
      assert(!err, err && err.message);
      assert.equal(res.statusCode, 200);
      done();
    });
  });

});
