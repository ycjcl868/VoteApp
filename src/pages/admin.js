import dva from 'dva';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import AdminLayout from '../common/adminLayout.jsx';
import Admin from '../containers/admin/admin.jsx';
import Welcome from '../components/Welcome/';

const app = dva();

// app.model();
app.model(require('../model/admin'));

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
        <IndexRoute component={Admin} />
        <Route path="movie" component={Welcome} />
      </Route>
    </Route>
  </Router>
);

app.start('#root');

