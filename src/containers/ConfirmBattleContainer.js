import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerInfo: [],
    };
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props.location.query;
    console.log(playerOne, playerTwo);
    // fetch from github & update the state.
    setTimeout(() => {
      console.log('fake fetching. . .');
      this.setState({ isLoading: false });
    }, 1000);
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
