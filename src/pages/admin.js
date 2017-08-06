import dva from 'dva';
import { Router, Route, IndexRoute, browserHistory } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Admin from '../containers/admin.jsx';

const app = dva({
  history: browserHistory,
});

// app.model();
app.model(require('../model/admin'));

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/admin">
      <IndexRoute component={Admin} />
    </Route>
  </Router>
);

app.start('#admin');

