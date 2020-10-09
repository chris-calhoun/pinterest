import BoardsView from '../components/views/boardsView';

const viewHelper = (view, uid) => {
  $('#app').html('');
  switch (view) {
    case 'boards-link':
      return BoardsView.boardView(uid);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, uid) => {
  viewHelper(view, uid);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, uid);
  });
};

export default { viewListener };
