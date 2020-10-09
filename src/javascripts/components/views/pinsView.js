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
  console.warn('soon to be board pins');
  $('body').on('click', '.card-body', (e) => {
    e.stopImmediatePropagation();
    $('#app').html('');

    console.warn(boardId);

    pinData.getBoardPins(boardId).then((response) => {
      console.warn(response);
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.pinMaker(item));
        });
      } else {
        $('#app').append('<h2>No pins related to this board!</h2>');
      }
    });
  });
};

export default { showAllPins, showBoardPins };
