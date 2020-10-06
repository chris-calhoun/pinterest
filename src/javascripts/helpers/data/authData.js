import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './farmerData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelper from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((farmer) => {
    if (farmer) {
      const currentFarmer = userData.setCurrentFarmer(farmer);
      myNavbar.myNavbar(currentFarmer);
      viewHelper.viewListener('cows-link');
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
