import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';

const pinView = (uid) => {
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

export default { pinView };
