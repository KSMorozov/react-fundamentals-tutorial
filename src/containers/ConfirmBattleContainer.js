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
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  componentDidMount() {
    const players = (({ playerOne, playerTwo }) => [playerOne, playerTwo])(this.props.location.query)
    getPlayersInfo(players)
      .then((players) => this.setState({ isLoading: false, playersInfo: [...players] }))
  }

  render() {
    return (
      <ConfirmBattle
        onInitiateBattle={this.handleInitiateBattle}
        {...this.state}
      />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ConfirmBattleContainer;
