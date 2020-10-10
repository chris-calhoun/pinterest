import axios from 'axios';
import apiKeys from '../apiKeys.json';
import PinData from './pinData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addBoard = (data) => axios
  .post(`${baseUrl}/board.json`, data)
  .then((response) => {
    const update = { Board_Firebase_Key: response.data.name };
    axios.patch(`${baseUrl}/board/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getUserBoards = (userUid) => new Promise((resolve, reject) => {
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

const getBoard = (boardKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/board.json?orderBy="Board_Firebase_Key"&equalTo="${boardKey}"`)
    .then((response) => {
      const board = Object.values(response.data)[0];
      resolve(board);
    })
    .catch((error) => reject(error));
});

const deleteBoard = (boardKey) => {
  PinData.getBoardPins(boardKey).then((response) => {
    response.forEach((pin) => {
      PinData.deletePin(pin.Pin_Firebase_Key);
    });
  })
    .then(() => {
      getBoard(boardKey).then((response) => {
        axios.delete(`${baseUrl}/board/${response.Board_Firebase_Key}.json`);
      });
    });
};

export default {
  getUserBoards,
  addBoard,
  deleteBoard
};
