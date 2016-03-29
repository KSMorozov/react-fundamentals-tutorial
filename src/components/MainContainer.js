import React from 'react';
import { transparent } from '../styles/styles';

const MainContainer = ({ children }) =>
  <div className="jumbotron col-sm-12 text-center" {...transparent}>
    {children}
  </div>;

export default MainContainer;
