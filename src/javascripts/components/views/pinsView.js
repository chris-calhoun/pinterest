import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';

const showAllPins = (uid) => {
  pinData.getUserPins(uid).then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.pinMaker(item));
      });
    } else {
      $('#app').append('<h2>No Pins!</h2>');
    }
  });
};

const showBoardPins = (boardId) => {
  $('#app').html('');
  pinData.getBoardPins(boardId).then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.pinMaker(item));
      });
    } else {
      $('#app').append('<h2>No pins related to this board!</h2>');
    }
  });
};

export default { showAllPins, showBoardPins };
