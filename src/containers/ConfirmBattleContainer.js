import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
  }

  componentDidMount() {
    const players = (({ playerOne, playerTwo }) => [playerOne, playerTwo])(this.props.location.query)
    getPlayersInfo(players)
      .then((players) => this.setState({ isLoading: false, playersInfo: [...players] }))
  }

  render() {
    return (
      <ConfirmBattle {...this.state} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ConfirmBattleContainer;
