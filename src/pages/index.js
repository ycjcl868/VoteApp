import dva from 'dva';
import { Router, Route, IndexRoute } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Index from '../containers/index.jsx';
import News from '../containers/news.jsx';
import Summary from '../containers/summary.jsx';

const app = dva();

// app.model();
app.model(require('../model/index'));
app.model(require('../model/news'));
app.model(require('../model/admin'));

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Index} />
      <Route path="news" component={News} />
      <Route path="summary" component={Summary} />
    </Route>
  </Router>
);

app.start('#root');

