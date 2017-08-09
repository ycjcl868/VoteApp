'use strict';

module.exports = app => {
  const home = app.controller.home;
  const movies = app.controller.movies;
  const upload = app.controller.upload;

  app.get('/', home.index);
  app.resources('movies', '/api/v1/movies', movies);
  app.get('/upload', home.upload);
  app.post('/upload', upload);
};
