import Landing from './modules/landing.js';
window['Landing'] = Landing;

// Custom animation for modal
$(document)
  .on('show.bs.modal', event => {
    let $target = $(event.target);

    if (!$target.hasClass('modal')) return;

    $target
      .find('.modal-dialog')
      .removeClass('animate__zoomOut')
      .addClass('animate__animated animate__zoomIn animate__faster');
  })
  .on('hide.bs.modal', event => {
    let $target = $(event.target);

    if (!$target.hasClass('modal')) return;

    $target
      .find('.modal-dialog')
      .removeClass('animate__zoomIn animate__faster');
    //.addClass('animate__zoomOut');
  });
