const boardMaker = (boardObject) => {
  const domString = `<div id="${boardObject.Board_Firebase_Key}" class="card m-2" style="width: 18rem;">
  <img id="${boardObject.Board_Firebase_Key}" class = "delete-board" viewBox="0 0 30 30" width="15" height="15" src="/src/svg/trash.svg" alt="icon name">
  <div class="card-board-body" id="${boardObject.Board_Firebase_Key}">
  <img class="card-img-top" src="${boardObject.Image_URL}" alt="Card image cap">
    <h5 class="card-title">${boardObject.Name}</h5>
    </div>
    <button type="button" id="${boardObject.Board_Firebase_Key}" class="btn btn-dark update-board">Update</button>
  </div>`;

  return domString;
};

export default { boardMaker };
