import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Profile from './containers/Profile';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={Home} />
      <Route path='profile' component={Profile} />
      <Route path='playerOne' header="Player One" component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
    </Route>
  </Router>
);
