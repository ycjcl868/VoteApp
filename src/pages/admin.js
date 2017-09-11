import dva from 'dva';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Welcome from '../containers/admin/welcome.jsx';
import AdminLayout from '../components/adminLayout.jsx';
import Movie from '../containers/admin/movie.jsx';

import '../styles/admin.less';

const app = dva();

// app.model();
require.context('../model/admin', true, /\.js$/).keys().forEach(file => {
  app.model(require(`../model/admin/${file.slice(2)}`));
});

class Login extends Component {
  render() {
    return (
      <div>
        Please Login
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  }
}

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Login} />
      <Route path="login" component={Login} />
      <Route path="dashboard" component={AdminLayout}>
        <IndexRoute component={Welcome} />
        <Route path="movie" component={Movie} />
      </Route>
    </Route>
  </Router>
);

app.start('#admin');

