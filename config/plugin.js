'use strict';

// had enabled by egg
// exports.static = true;
exports.proxyworker = {
  enable: true,
  package: 'egg-development-proxyworker',
};
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.static = true;
