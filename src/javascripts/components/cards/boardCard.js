const boardMaker = (boardObject) => {
  const domString = `<div id="${boardObject.Board_Firebase_Key}" class="card m-2" style="width: 18rem;">
  <div class="card-board-body" id="${boardObject.Board_Firebase_Key}">
  <img class="card-img-top" src="${boardObject.Image_URL}" alt="Card image cap">
    <h5 class="card-title">${boardObject.Name}</h5>
    </div>
    <button type="button" id="${boardObject.Board_Firebase_Key}" class="btn btn-dark update-board">Update</button>
    <button type="button" id="${boardObject.Board_Firebase_Key}" class="btn btn-danger delete-board">Delete</button>
  </div>`;

  return domString;
};

export default { boardMaker };
