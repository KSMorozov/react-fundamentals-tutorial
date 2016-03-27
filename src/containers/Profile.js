import React, { Component } from 'react';
import { Avatar, ProfileLink, Name } from '../components/Profile';

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
        <p>Welcome to Profile.</p>
        <Avatar src={this.state.image} />
        <Name>{this.state.username}</Name>
        <ProfileLink username={this.state.username}>{this.state.username}</ProfileLink>
      </div>
    );
  }
}

export default Profile;
