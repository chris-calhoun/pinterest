import boardData from '../../helpers/data/boardData';
import form from '../forms/updateBoardForm';

const updateBoardView = (boardId) => {
  $('#app').html('<div class="update-view" id="update-board"></div>');
  boardData.getBoard(boardId).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updateBoardView };
