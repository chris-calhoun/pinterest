import boardData from '../../helpers/data/cowData';

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
    cowData.deleteCow(firebaseKey);
  });
  return domString;
};

export default { boardMaker };
