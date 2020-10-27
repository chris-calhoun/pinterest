import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const updatePinForm = (pinObject) => {
  $('#update-pin').html(`
<h2>Update Pin</h2>
<div id="success-message"></div>
<form>
  <div id="error-message"></div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" value="${pinObject.Name}" class="form-control" id="name" placeholder="Could be anything!">
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="text" value="${pinObject.Image_URL}" class="form-control" id="image" placeholder="Image address">
  </div>
  <div class="form-group">
    <label for="board">Board</label>
        <select class="form-control" id="board">
            <option value="">Select a Board</option>
        </select>
    </div>
  <button id="update-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add Pin</button>
</form>`);

  boardData.getUserBoards().then((response) => {
    response.forEach((board) => {
      $('#board').append(`option value='${board.uid}' ${pinObject.Board_Firebase_Key === board.uid ? 'selected' : ''}>${board.name}</option>`);
    });
  });

  $('#update-pin-btn').on('click', (e) => {
    e.preventDefault();

    const updatedPinObj = {
      Name: $('#name').val() || false,
      Image_URL: $('#image').val() || false,
      Board_Firebase_Key: $('#board').val() || false,
    };
    if (Object.values(updatedPinObj).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      pinData
        .updatePin(pinObject.Pin_Firebase_Key, updatedPinObj)
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

export default { updatePinForm };
