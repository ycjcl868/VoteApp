'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'webstorm-disable-index',
  ],
  exclude: [
    './test/fixtures',
    './dist',
  ],
};

