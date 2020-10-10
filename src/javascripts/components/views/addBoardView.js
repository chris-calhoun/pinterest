import form from '../forms/addBoardForm';

const addBoardView = () => {
  $('#app').html('<div class = "forms" id = "board-form"></div>');
  form.addBoardForm();
};

export default { addBoardView };
