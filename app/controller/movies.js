const movies = require('../../mockData/getMovie.json');
const createRule = {
  cineName: 'string',
  ticket: {
    type: 'string',
    max: 99999,
  },
  poster: 'string',
  type: 'string',
  description: 'string',
  state: 'string',
  publishTime: 'string',
  score: {
    type: 'string',
    max: 10,
  },
  isNew: [ '0', '1' ],
};
const updateRule = {
  ticket: {
    type: 'string',
    max: 99999,
  },
  isNew: {
    type: 'enum',
    values: [ '0', '1' ],
    required: false,
  },
};

exports.index = function* (ctx) {
  // 电影列表
  try {
    // 有数据库时
    const cine = yield ctx.service.movies.listMovies();
    ctx.body = cine;
  } catch (e) {
    // 没有时，读取mock
    ctx.body = movies;
  }
};
exports.create = function* (ctx) {
  // 新增电影
  try {
    ctx.validate(createRule);
    const result = yield ctx.service.movies.addMovie(ctx.request.body);
    ctx.body = result;
  } catch (e) {
    ctx.body = {
      status: -2,
      info: e.message,
    };
  }

};
exports.update = function* (ctx) {
  // 更新某个电影
  try {
    ctx.validate(updateRule);
    const result = yield ctx.service.movies.updateMovie(ctx.params.id, ctx.request.body);
    ctx.body = result;
  } catch (e) {
    ctx.body = {
      status: -2,
      info: e.message,
    };
  }
};
exports.destroy = function* (ctx) {
  // 删除某个电影
  try {
    const result = yield ctx.service.movies.removeMovie(ctx.params.id);
    ctx.body = result;
  } catch (e) {
    ctx.body = {
      status: -2,
      info: e.message,
    };
  }

};

