import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const checkIfUserExistsInFirebase = (user) => {
  axios
    .get(`${baseUrl}/user.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios
          .post(`${baseUrl}/user.json`, user)
          .then((response) => {
            const update = { firebaseKey: response.data.name };
            axios.patch(`${baseUrl}/user/${response.data.name}.json`, update);
          })
          .catch((error) => console.warn(error));
      } else {
        console.warn('User Already Exists');
      }
      // NOTE FOR STUDENTS
      // Set session storage after we know that user is in DB so that we do not hit the API again during this session. Limit hits to the API.
      window.sessionStorage.setItem('ua', true);
    })
    .catch((error) => console.error(error));
};

const setCurrentUser = (userObj) => {
  const user = {
    image: userObj.photoURL,
    uid: userObj.uid,
    name: userObj.displayName,
    email: userObj.email,
    lastSignInTime: userObj.metadata.lastSignInTime,
  };

  // NOTE FOR STUDENTS
  // If the user is logged in and this is set, we have already checked the API, so if they refresh, we know that they already exist.
  const loggedIn = window.sessionStorage.getItem('ua');
  if (!loggedIn) {
    checkIfUserExistsInFirebase(user);
  }
  return user;
};

export default { setCurrentUser };
