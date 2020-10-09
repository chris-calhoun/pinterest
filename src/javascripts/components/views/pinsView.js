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

const showBoardPins = () => {
  console.warn('soon to be board pins');
  $('body').on('click', '.card-body', (e) => {
    e.stopImmediatePropagation();
    $('#app').html('');
  });
};

export default { showAllPins, showBoardPins };
