import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCard';

const boardView = () => {
  boardData.getUserBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>No Boards!</h2>');
    }
  });
};

export default { boardView };
