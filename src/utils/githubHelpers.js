import axios from 'axios';

// const CLIENT_ID = '';
// const SECRET_KEY = '';
// const param = `?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}`;
function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
}

function getTotalStars(repos) {
  return repos.data.reduce((p, c) => p + c.stargazers_count, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

export function getPlayersInfo(players) {
  return axios.all(players.map((username) => getUserInfo(username)))
    .then(res => res.map(user => user.data))
    .catch(err => console.warn('Error while fetching data', err));
};

export function battle(players) {
  var playerOneData = getPlayersData(players[0]);
  var playerTwoData = getPlayersData(players[1]);
  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
};
