const createRule = {

};

exports.index = function* (ctx) {
  const url = this.app.config.mockServer;
  // 电影列表
  const result = yield ctx.curl(`${url}/movies`, {
    method: 'GET',
    dataType: 'json',
  });
  ctx.body = result.data;
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

