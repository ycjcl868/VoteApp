module.exports = app => {
  return class Index extends app.Service {
    * find(uid) {
      // const user = yield app.mysql.get('user', { user_login_name: 1407080229 });
      return {
        user: 123456,
      };
    }
  };
};
