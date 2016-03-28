import axios from 'axios';

// const CLIENT_ID = '';
// const SECRET_KEY = '';
// const param = `?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}`;

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export function getPlayersInfo(players) {
  return axios.all(players.map((username) => getUserInfo(username)))
    .then(res => res.map(user => user.data))
    .catch(err => console.warn('Error while fetching data', err));
};
