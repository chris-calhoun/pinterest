import firebase from 'firebase/app';
import pinData from '../../helpers/data/pinData';

const addPinForm = () => {
  $('#pin-form').html(`
        <h2>Add a Pin</h2>
        <div id="success-message"></div>
        <form>
          <div id="error-message"></div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Could be anything!">
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="text" class="form-control" id="image" placeholder="Image address">
          </div>
          <button id="add-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add Pin</button>
        </form>`);

  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      Name: $('#name').val() || false,
      Image_URL: $('#image').val() || false,
      User_ID: firebase.auth().currentUser.uid,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      pinData
        .addPin(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Pin Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#name').val('');
      $('#image').val('');
    }
  });
};

export default { addPinForm };
