import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Profile from './containers/Profile';
import Home from './components/Home';
import ConfirmBattleContainer from './containers/ConfirmBattleContainer';
import ResultsContainer from './containers/ResultsContainer';
import PromptContainer from './containers/PromptContainer';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={Home} />
      <Route path='profile' component={Profile} />
      <Route path='playerOne' header="Player One" component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer}/>
    </Route>
  </Router>
);
