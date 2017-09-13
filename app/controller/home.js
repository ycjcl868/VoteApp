'use strict';
const logNum = require('../../mockData/getLogNum.json');

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      // const user = yield this.ctx.service.index.find(1);
      yield this.ctx.render('index', {
        title: this.ctx.__('index'),
        page: 'index',
      });
    }
    * logNum() {
      this.ctx.body = logNum;
    }
    * upload() {
      yield this.ctx.render('upload', {
        title: this.ctx.__('upload'),
        page: 'upload',
      });
    }
  }
  return HomeController;
};
