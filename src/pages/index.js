import dva from 'dva';
import { Router, Route, IndexRoute } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Index from '../containers/home/index.jsx';
import News from '../containers/home/news.jsx';
import Summary from '../containers/home/summary.jsx';

import '../styles/style.less';

const app = dva();

// app.model();
app.model(require('../model/layout'));
app.model(require('../model/index'));
app.model(require('../model/news'));
app.model(require('../model/summary'));
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

