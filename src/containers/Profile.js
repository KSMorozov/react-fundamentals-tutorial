import React, { Component } from 'react';
import { Avatar, Link, Name } from '../components/Profile';
// import Link from '../components/Link';
// import Name from '../components/Name';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kirill Morozov',
      username: 'KSMorozov',
      image: 'https://avatars1.githubusercontent.com/u/10233823?v=3&s=460',
    };
  }

  render() {
    return (
      <div>
        <Avatar src={this.state.image} />
        <Name>{this.state.username}</Name>
        <Link username={this.state.username}>{this.state.username}</Link>
      </div>
    );
  }
}

export default Profile;
