const createRule = {

};

exports.index = function* (ctx) {
  // 电影列表
  ctx.body = {
    status: 1,
    body: '电影列表',
  };
};
exports.create = function* (ctx) {
  // 新增电影
  ctx.body = {
    status: 1,
    body: '新增电影',
  };
};
exports.update = function* (ctx) {
  // 更新某个电影
  ctx.body = {
    status: 1,
    body: '更新某个电影',
  };
};
exports.destroy = function* (ctx) {
  // 删除某个电影
  ctx.body = {
    status: 1,
    body: '删除某个电影',
  };
};

