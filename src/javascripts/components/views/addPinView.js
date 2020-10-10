import form from '../forms/addPinForm';

const addPinView = () => {
  $('#app').html('<div class = "forms" id = "pin-form"></div>');
  form.addPinForm();
};

export default { addPinView };
