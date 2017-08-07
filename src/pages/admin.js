import dva from 'dva';
import { Router, Route, IndexRoute } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Admin from '../containers/admin.jsx';
import Welcome from '../components/Welcome/';

const app = dva();

// app.model();
app.model(require('../model/admin'));

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={Admin}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);

app.start('#root');

