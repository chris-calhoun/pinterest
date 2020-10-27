import pinData from '../../helpers/data/pinData';
import form from '../forms/updatePinForm';

const updatePinView = (pinId) => {
  $('#app').html('<div class="update-view" id="update-pin"></div>');
  pinData.getPin(pinId).then((response) => {
    form.updatePinForm(response);
  });
};

export default { updatePinView };
