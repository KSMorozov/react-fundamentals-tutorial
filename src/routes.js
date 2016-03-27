import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Profile from './containers/Profile';
import Home from './components/Home';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={Home} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>
);
