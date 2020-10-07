import BoardsView from '../components/views/boardsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return BoardsView.boardView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
