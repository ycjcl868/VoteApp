'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('index', {
        title: '首页 - 电影投票系统',
        page: 'index',
      });
    }
    * upload() {
      yield this.ctx.render('upload', {
        title: '上传页面',
        page: 'upload',
      });
    }
  }
  return HomeController;
};
