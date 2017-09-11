'use strict';
const logNum = require('../../mockData/getLogNum.json');

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      // const user = yield this.ctx.service.index.find(1);
      yield this.ctx.render('index', {
        title: '首页 - 电影投票系统',
        page: 'index',
      });
    }
    * logNum() {
      this.ctx.body = logNum;
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
