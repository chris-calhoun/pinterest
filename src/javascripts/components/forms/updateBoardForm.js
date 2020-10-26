import firebase from 'firebase/app';
import boardData from '../../helpers/data/boardData';

const updateBoardForm = (boardObj) => {
  $('#update-board').html(`
<h2>Update Board</h2>
<div id="success-message"></div>
<form>
  <div id="error-message"></div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" value="${boardObj.Name}" class="form-control" id="name" placeholder="Example: Ultimate Frisbee, Chess, Coffee, etc.">
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="text" class="form-control" value="${boardObj.Image_URL}" id="image" placeholder="Image address">
  </div>
  <button id="update-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Update Board</button>
</form>`);

  $('#update-board-btn').on('click', (e) => {
    e.preventDefault();
    const updatedBoardObj = {
      Name: $('#name').val() || false,
      Image_URL: $('#image').val() || false,
      User_ID: firebase.auth().currentUser.uid,
    };
    if (Object.values(updatedBoardObj).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      boardData
        .updateBoard(boardObj.Board_Firebase_Key, updatedBoardObj)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Info Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 2000);
      $('#board').val('');
    }
  });
};

export default { updateBoardForm };
