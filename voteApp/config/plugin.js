'use strict';

// had enabled by egg
// exports.static = true;
exports.proxyworker = {
  enable: true,
  package: 'egg-development-proxyworker',
};
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.static = true;
