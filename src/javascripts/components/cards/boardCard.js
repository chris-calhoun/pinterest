const boardMaker = (boardObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" >
    <div class="card-body" id="${boardObject.Board_Id}">
    <img class="card-img-top" src="${boardObject.Image_URL}" alt="Card image cap">
      <h5 class="card-title">${boardObject.Name}</h5>
      </div>
  </div>`;

  return domString;
};

export default { boardMaker };
