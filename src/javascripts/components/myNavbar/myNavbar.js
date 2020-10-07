import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();

    // NOTE FOR STUDENTS
    // Remove session storage if they log out in the same session and in case another user logs in, we want the API check to happen.
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const myNavbar = () => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Pinterest</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navSupportInfo" aria-controls="navSupportInfo" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navSupportInfo">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <button class="nav-link btn btn-danger" id="navbar-logout-button">Logout</button>
          </li>
        </ul>
      </div>
    </nav>`
  );

  logoutEvent();
};

export default { myNavbar };
