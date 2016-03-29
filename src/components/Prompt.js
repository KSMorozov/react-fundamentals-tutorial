import React, { PropTypes } from 'react';
import { transparent } from '../styles/styles';
import MainContainer from './MainContainer';

const Prompt = ({ ...props }) =>
  <MainContainer>
    <h1>{props.header}</h1>
    <div className="col-sm-12">
      <form onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Github username"
            onChange={props.onUpdateUser}
            value={props.username}
            type="text"
          />
        </div>
        <div className="form-group col-sm-8 col-sm-offset-2">
          <button
            className="btn btn-block btn-success"
            type="submit"
          >
              Continue
          </button>
        </div>
      </form>
    </div>
  </MainContainer>;

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Prompt;
