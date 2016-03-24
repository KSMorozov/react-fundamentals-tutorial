import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Mike', 'Paula', 'Bilbo'],
      message: 'Hey Message from Parent to Child',
    };
  }

  render() {
    return <Child {...this.state} />;
  }
}

export default Parent;
