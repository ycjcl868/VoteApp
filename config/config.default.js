'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1500789024630_3522';

  // add your config here
  config.proxyworker = {
    port: 10086,
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
  };
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'public'),
  };
  config.mockServer = 'https://easy-mock.com/mock/59714774a1d30433d8391e7c/voteSystem/cine';
  config.server = 'http://119.29.0.179/VoteSystem';
  return config;
};
