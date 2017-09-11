const summary = require('../../mockData/getSummary.json');

const createRule = {

};

exports.index = function* (ctx) {
  // 数据列表
  ctx.body = summary;
};
exports.create = function* (ctx) {
  // 数据
  ctx.body = {
    status: 1,
    body: '新增数据',
  };
};
exports.update = function* (ctx) {
  // 数据
  ctx.body = {
    status: 1,
    body: '更新某个数据',
  };
};
exports.destroy = function* (ctx) {
  // 数据
  ctx.body = {
    status: 1,
    body: '删除某个数据',
  };
};

