import dva from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import ReactDOM from 'react-dom';

import Index from './containers/index.jsx';
import Admin from './containers/admin.jsx';

import indexModel from './model/index.js';
import adminModel from './model/admin.js';

import './styles/style.less';


const app = dva();

// app.model();
app.model(indexModel);
app.model(adminModel);

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={Index} />
    <Route path="/admin" component={Admin} />
  </Router>
);

app.start('#root');

