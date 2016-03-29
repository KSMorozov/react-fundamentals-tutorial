import React, { Component } from 'react';
import { container, content } from '../styles/styles';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading',
      speed: 300,
    };
  }

  componentDidMount() {
    const stopper = 'Loading...';
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState({ text: this.props.text })
        : this.setState({ text: this.state.text + '.' });
    }, this.state.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return(
      <div {...container}>
        <p {...content}>{this.state.text}</p>
      </div>
    );
  }
}

export default Loading;
