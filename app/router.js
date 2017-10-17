'use strict';

module.exports = app => {
  const home = app.controller.home;
  const admin = app.controller.admin;
  const movies = app.controller.movies;
  const logs = app.controller.logs;
  const summary = app.controller.summary;
  const upload = app.controller.upload;

  const auth = app.middlewares.authValidate();

  app.get('/', home.index);
  app.get('/admin', admin.index);
  app.get('/api/v1/logNum', home.logNum);
  app.resources('movies', '/api/v1/movies', movies);
  app.resources('logs', '/api/v1/logs', logs);
  app.resources('summary', '/api/v1/summary', summary);
  app.get('/upload', auth, home.upload);
  app.post('/upload', upload);
};
