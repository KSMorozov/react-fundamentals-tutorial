import React, { cloneElement } from 'react';
import css from './main.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = ({ children, ...props }) =>
  <div className="container main-container">
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {cloneElement(children, { key: props.location.pathname })}
    </ReactCSSTransitionGroup>
  </div>

export default App;
