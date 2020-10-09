import BoardsView from '../components/views/boardsView';

const viewHelper = (id, uid) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return BoardsView.boardView(uid);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, uid) => {
  viewHelper(view, uid);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
