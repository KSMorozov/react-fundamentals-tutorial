import React from 'react';
import { transparent } from '../styles/styles';
import { Link } from 'react-router';

const Home = () =>
  <div className="jumbotron col-sm-12 text-center" {...transparent}>
    <h1>Github Battle</h1>
    <p className="lead">Some fancy motto</p>
    <Link to="playerOne">
      <button type="button" className="btn btn-large btn-success">Get Started</button>
    </Link>
  </div>;

export default Home;
