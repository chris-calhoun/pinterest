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

const myNavbar = (currentUser) => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Pinterest</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navSupportInfo" aria-controls="navSupportInfo" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navSupportInfo">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3"  id="boards-link">
      <a class="nav-link" href="#">Boards</a>
    </li>
    <li class="nav-item mx-3" id="pins-link">
      <a class="nav-link" href="#">Pins</a>
    </li>
    <li class="nav-item mx-3" id="add-board-link">
      <a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Add Board</a>
    </li>
    <li class="nav-item mx-3" id="add-pin-link">
      <a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Add Pin</a>
    </li>

  </ul>
    
      <ul class="navbar-nav ml-auto">
        <li class="user-info-nav">
          Welcome, ${currentUser.name}!
        </li>
        <li class="nav-item">
          <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
        </li>
      </ul>
    </div>
    </nav>`
  );

  logoutEvent();
};

export default { myNavbar };
