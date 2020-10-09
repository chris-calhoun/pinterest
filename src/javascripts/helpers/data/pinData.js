import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addPin = (data) => axios
  .post(`${baseUrl}/pin.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/pin/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getUserPins = (userUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pin.json?orderBy="User_ID"&equalTo="${userUid}"`)
    .then((response) => {
      const userPins = response.data;
      const pins = [];
      if (userPins) {
        Object.keys(userPins).forEach((pinId) => {
          pins.push(userPins[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((error) => reject(error));
});

export default {
  getUserPins,
  addPin,
};
