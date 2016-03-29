import React from 'react';
import { transparent } from '../styles/styles';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

const Home = () =>
  <MainContainer>
    <h1>Github Battle</h1>
    <p className="lead">Some fancy motto</p>
    <Link to="playerOne">
      <button type="button" className="btn btn-large btn-success">Get Started</button>
    </Link>
  </MainContainer>;

export default Home;
