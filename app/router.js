'use strict';

module.exports = app => {
  const home = app.controller.home;
  const movies = app.controller.movies;
  const logs = app.controller.logs;
  const upload = app.controller.upload;

  app.get('/', home.index);
  app.resources('movies', '/api/v1/movies', movies);
  app.resources('logs', '/api/v1/logs', logs);
  app.resources('summary', '/api/v1/summary', logs);
  app.get('/upload', home.upload);
  app.post('/upload', upload);
};
