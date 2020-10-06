import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './farmerData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelper from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
    } else {
    }
  });
};

export default { checkLoginStatus };
