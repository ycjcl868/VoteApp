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
    dir: path.join(appInfo.baseDir, 'app/public'),
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'your db server',
      // 端口号
      port: 'your db port',
      // 用户名
      user: 'your db user',
      // 密码
      password: 'your passwd',
      // 数据库名
      database: 'your database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return config;
};
