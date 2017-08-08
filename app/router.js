'use strict';

module.exports = app => {
  const home = app.controller.home;
  const upload = app.controller.upload;
  app.get('/', home.index);
  app.get('/upload', home.upload);
  app.post('/upload', upload);
};
