import boardData from '../../helpers/data/boardData';
import form from '../forms/updateBoardForm';

const updateBoard = (boardId) => {
  $('#app').html('<div class="update-form" id="update-board"></div>');
  boardData.getBoard(boardId).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updateBoard };
