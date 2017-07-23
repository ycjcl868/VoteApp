'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/news', 'home.news');
  app.get('/summary', 'home.summary');
};
