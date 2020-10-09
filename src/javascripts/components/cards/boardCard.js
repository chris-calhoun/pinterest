// import pinsView from '../views/pinsView';
const boardMaker = (boardObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${boardObject.Board_Id}">
    <div class="card-body">
    <img class="card-img-top" src="${boardObject.Image_URL}" alt="Card image cap">
      <h5 class="card-title">${boardObject.Name}</h5>
      </div>
  </div>`;

  // pinsView.showBoardPins(boardObject.Board_Id);
  return domString;
};

export default { boardMaker };
