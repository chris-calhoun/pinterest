const pinMaker = (pinObject) => {
  const domString = `<div id = "${pinObject.Pin_Firebase_Key}" class="card m-2" style="width: 18rem;">
    <div class="card-pin-body">
      <img class="card-img-top" src="${pinObject.Image_URL}" alt="Card image cap">
      <h5 class="card-title">${pinObject.Name}</h5>
    </div>
    <button type="button" id="${pinObject.Pin_Firebase_Key}" class="btn btn-dark update-pin">Update</button>
    <button type="button" id="${pinObject.Pin_Firebase_Key}" class="btn btn-danger delete-pin">Delete</button>
  </div>`;

  return domString;
};

export default { pinMaker };
