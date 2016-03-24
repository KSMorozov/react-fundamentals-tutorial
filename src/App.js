import React, { Component } from 'react';
import Parent from './components/Parent.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React JS programm.</h1>
        <Parent />
      </div>
    );
  }
}
