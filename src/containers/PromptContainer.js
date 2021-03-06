import React, { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';
import { transparent } from '../styles/styles';

class PromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  handleUpdateUser(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmitUser(e) {
    e.preventDefault();
    this.setState({ username: '' });
    this.props.routeParams.playerOne
      ? (
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username,
          },
        })
      )
      : (
        this.context.router.push('/playerTwo/' + this.state.username)
      );
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PromptContainer;
