'use strict';

module.exports = app => {
  class AdminController extends app.Controller {
    * index() {
      // const user = yield this.ctx.service.index.find(1);
      yield this.ctx.render('admin', {
        title: this.ctx.__('admin'),
        page: 'admin',
      });
    }
  }
  return AdminController;
};
