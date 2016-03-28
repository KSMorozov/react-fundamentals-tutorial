import React, { Component } from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  componentDidMount() {
    battle(this.props.location.state.playersInfo)
      .then(scores => this.setState({ scores, isLoading: false }));
  }

  render() {
    return <Results {...this.props.location.state} {...this.state}  />
  }
}

export default ResultsContainer;
