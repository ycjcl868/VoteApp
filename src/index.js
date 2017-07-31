import dva from 'dva';
import { Router, Route, IndexRoute, browserHistory } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Index from './containers/index.jsx';
import News from './containers/news.jsx';
import Summary from './containers/summary.jsx';
import Admin from './containers/admin.jsx';

const app = dva({
  history: browserHistory,
});

// app.model();
app.model(require('./model/index'));
app.model(require('./model/admin'));

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Index} />
      <Route path="news" component={News} />
      <Route path="summary" component={Summary} />
    </Route>
    <Route path="/admin" component={Admin} />
  </Router>
);

app.start('#root');

