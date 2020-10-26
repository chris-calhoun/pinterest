import BoardsView from '../components/views/boardsView';
import PinsView from '../components/views/pinsView';
import AddBoardView from '../components/views/addBoardView';
import AddPinView from '../components/views/addPinView';
import PinData from './data/pinData';
import BoardData from './data/boardData';
import UpdateBoard from '../components/views/updateBoardView';

const viewHelper = (view, uid) => {
  $('#app').html('');
  switch (view) {
    case 'boards-link':
      return BoardsView.boardView(uid);
    case 'pins-link':
      return PinsView.showAllPins(uid);
    case 'add-board-link':
      return AddBoardView.addBoardView();
    case 'add-pin-link':
      return AddPinView.addPinView();
    case 'update-board-link':
      return UpdateBoard.updateBoardView(uid);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, uid) => {
  viewHelper(view, uid);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, uid);
  });

  $('body').on('click', '.update-form', (e) => {
    viewHelper('update-board-link', e.currentTarget.id);
  });

  $('body').on('click', '.card-board-body', (e) => {
    e.stopImmediatePropagation();
    PinsView.showBoardPins(e.currentTarget.id);
  });

  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.target.id}`).remove();
    PinData.deletePin(e.target.id);
  });
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.target.id}`).remove();
    BoardData.deleteBoard(e.target.id);
  });
};

export default { viewListener };
