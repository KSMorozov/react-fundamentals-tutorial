import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper'
import { transparent, space } from '../styles/styles';
import MainContainer from './MainContainer';
import Loading from './Loading';

// const Loading = () => <p>LOADING. . .</p>;

const Confirm = ({ onInitiateBattle, playersInfo }) =>
  <MainContainer>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Player 1">
        <UserDetails info={playersInfo[0]}/>
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player 2">
        <UserDetails info={playersInfo[1]}/>
      </UserDetailsWrapper>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" {...space}>
        <button
          type="button"
          className="btn btn-lg btn-success"
          onClick={onInitiateBattle}
        >Initiate Battle!</button>
      </div>
      <div className="col-sm-12" {...space}>
        <Link to="playerOne">
          <button type="button"className="btn btn-lg btn-danger">
            Reselect Players
          </button>
        </Link>
      </div>
    </div>
  </MainContainer>;

const ConfirmBattle = ({...props}) =>
  props.isLoading
    ? <MainContainer><Loading text='Loading' /></MainContainer>
    : <Confirm {...props} />;

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

export default ConfirmBattle;
