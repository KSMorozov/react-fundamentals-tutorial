import React, { PropTypes } from 'react';
import { transparent, space } from '../styles/styles';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import UserDetails from './UserDetails';
import Loading from './Loading';
import { Link } from 'react-router';

const winner = scores => scores[0] > scores[1] ? 0 : 1;
const loser = scores => winner(scores) === 0 ? 1 : 0;

const Retry = () =>
  <div className="col-sm-12" {...space}>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-danger">Start Over</button>
    </Link>
  </div>

const Results = (props) =>
  props.isLoading
    ? <MainContainer>
        <Loading text='Loading' />
      </MainContainer>
    : props.scores[0] !== props.scores[1]
        ? <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
              <UserDetailsWrapper header="Winner">
                <UserDetails score={props.scores[winner(props.scores)]} info={props.playersInfo[winner(props.scores)]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header="Loser">
                <UserDetails score={props.scores[loser(props.scores)]} info={props.playersInfo[loser(props.scores)]} />
              </UserDetailsWrapper>
            </div>
            <Retry />
          </MainContainer>
        : <MainContainer>
            <h1>It's a tie.</h1>
            <Retry />
          </MainContainer>;

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
};

export default Results;
