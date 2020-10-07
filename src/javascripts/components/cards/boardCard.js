import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${boardObject.firebaseKey}">
    <div class="card-body">
      <h5 class="card-title">${boardObject.name}</h5>
    </div>
  </div>`;

  $('body').on('click', '.delete-cow', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    boardData.deleteBoard(firebaseKey);
  });
  return domString;
};

export default { boardMaker };
