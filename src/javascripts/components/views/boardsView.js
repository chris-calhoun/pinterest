import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCard';

const boardView = (user) => {
  console.warn('in boardView function');
  boardData.getUserBoards(user).then((response) => {
    console.warn(response);
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
