import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper'
import { transparent, space } from '../styles/styles';

const Loading = () => <p>LOADING. . .</p>;

const Confirm = ({ onInitiateBattle, playersInfo }) =>
  <div className="jumbotron col-sm-12 text-center" {...transparent}>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Player 1">
        <UserDetails user={playersInfo[0]}/>
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player 2">
        <UserDetails user={playersInfo[1]}/>
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
  </div>;

const ConfirmBattle = ({...props}) =>
  props.isLoading
    ? <Loading />
    : <Confirm {...props} />;

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

export default ConfirmBattle;
