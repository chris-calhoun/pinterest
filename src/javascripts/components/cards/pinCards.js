import PinData from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div id = ${pinObject.Pin_Firebase_Key} class="card m-2" style="width: 18rem;">
    <div class="card-pin-body">
      <img class = "delete-pin" viewBox="0 0 30 30" width="15" height="15" src="/src/svg/trash.svg" alt="icon name">
      <img class="card-img-top" src="${pinObject.Image_URL}" alt="Card image cap">
      <h5 class="card-title">${pinObject.Name}</h5>
    </div>
  </div>`;

  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    $(`${e.currentTarget.id}`).remove();
    PinData.deletePin(e.currentTarget.id);
  });

  return domString;
};

export default { pinMaker };
