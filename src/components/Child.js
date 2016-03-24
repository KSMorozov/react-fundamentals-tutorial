import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.list.map((item, i) => <li key={i}>{item}</li>);
  }

  render() {
    return (
      <div>
        <h3>{this.props.message}</h3>
        {this.renderList()}
      </div>
    );
  }
}

export default Child;
