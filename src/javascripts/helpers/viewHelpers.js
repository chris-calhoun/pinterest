import BoardsView from '../components/views/boardsView';
import PinsView from '../components/views/pinsView';

const viewHelper = (view, uid) => {
  $('#app').html('');
  switch (view) {
    case 'boards-link':
      return BoardsView.boardView(uid);
    case 'pins-link':
      return PinsView.showAllPins(uid);

    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, uid) => {
  viewHelper(view, uid);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, uid);
  });

  $('body').on('click', '.card-body', (e) => {
    e.stopImmediatePropagation();
    PinsView.showBoardPins(e.currentTarget.id);
  });
};

export default { viewListener };
