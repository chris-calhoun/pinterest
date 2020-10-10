import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addBoard = (data) =>
  axios
    .post(`${baseUrl}/board.json`, data)
    .then((response) => {
      const update = { Board_Firebase_Key: response.data.name };
      axios.patch(`${baseUrl}/board/${response.data.name}.json`, update);
    })
    .catch((error) => console.warn(error));

const getUserBoards = (userUid) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/board.json?orderBy="User_ID"&equalTo="${userUid}"`)
      .then((response) => {
        const userBoards = response.data;
        const boards = [];
        if (userBoards) {
          Object.keys(userBoards).forEach((boardId) => {
            boards.push(userBoards[boardId]);
          });
        }
        resolve(boards);
      })
      .catch((error) => reject(error));
  });

export default {
  getUserBoards,
  addBoard,
};
