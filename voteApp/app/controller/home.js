'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('index', {
        title: '首页 - 电影投票系统',
        page: 'index',
      });
    }
    * news() {
      yield this.ctx.render('news', {
        title: '动态页 - 电影投票系统',
        page: 'news',
      });
    }
    * summary() {
      yield this.ctx.render('summary', {
        title: '统计页 - 电影投票系统',
        page: 'summary',
      });
    }
  }
  return HomeController;
};
