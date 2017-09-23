'use strict';

module.exports = app => {
  class AdminController extends app.Controller {
    * index() {
      yield this.ctx.render('admin', {
        title: this.ctx.__('admin'),
        page: 'admin',
      });
    }
  }
  return AdminController;
};
