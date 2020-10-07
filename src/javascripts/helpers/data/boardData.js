import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addBoard = (data) => axios
  .post(`${baseUrl}/board.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/board/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getUserBoards = (userUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/board.json?orderBy="userUid"&equalTo="${userUid}"`)
    .then((response) => {
      const userBoards = response.data;
      const cows = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          cows.push(userBoards[boardId]);
        });
      }
      resolve(cows);
    })
    .catch((error) => reject(error));
});

export default {
  getUserBoards,
  addBoard,
};
