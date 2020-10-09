import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';
import viewHelper from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObject) => {
    if (userObject) {
      // assigns user object to current user variable
      const currentUser = userData.setCurrentUser(userObject);
      myNavbar.myNavbar(currentUser);
      viewHelper.viewListener('boards-link', userObject.uid);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
