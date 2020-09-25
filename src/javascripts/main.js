import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
};

init();
