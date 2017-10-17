module.exports = options => {
  return function* (next) {
    console.log('-----enter authValidate------');
    const token = this.cookies.get('authToken');
    if (!token || token !== '123456') {
      console.log('------ Please login ---------');
      this.redirect('/admin');
    }
    console.log('----login-------');
    console.log(options);
    yield next;
  };
};
