const pinMaker = (pinObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${pinObject.firebaseKey}">
    <div class="card-body">
    <img class="card-img-top" src="${pinObject.Image_URL}" alt="Card image cap">
      <h5 class="card-title">${pinObject.Name}</h5>
      </div>
  </div>`;

  return domString;
};

export default { pinMaker };
