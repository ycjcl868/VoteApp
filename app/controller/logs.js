const logs = require('../../mockData/getLogs.json');
const createRule = {

};

exports.index = function* (ctx) {
  // 日志列表
  ctx.body = logs;
};
exports.create = function* (ctx) {
  // 新增日志
  ctx.body = {
    status: 1,
    body: '新增日志',
  };
};
exports.update = function* (ctx) {
  // 更新日志
  ctx.body = {
    status: 1,
    body: '更新某个电影',
  };
};
exports.destroy = function* (ctx) {
  // 删除日志
  ctx.body = {
    status: 1,
    body: '删除某个电影',
  };
};

