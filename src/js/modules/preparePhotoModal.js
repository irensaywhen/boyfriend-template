export default function preparePhotoModal({ modal, animateOnShown }) {
  const $body = $('body'),
    $modal = $(modal),
    //$animateOnShown = $modal.find(animateOnShown).fadeOut(0);
    $animateOnShown = $modal.find(animateOnShown).css('opacity', '0');

  let shown = false;

  function _setUpEventListeners() {
    // Adjust background opacity for gallery modal
    $modal.on('show.bs.modal', () => {
      $body.addClass('gallery');
    });

    $modal.on('shown.bs.modal', () => {
      $animateOnShown.css('opacity', 1);
      shown = true;
    });

    $modal.on('hide.bs.modal', event => {
      if (shown) event.preventDefault();
      shown = false;
      $animateOnShown.css('opacity', 0);
      setTimeout(() => $modal.modal('hide'), 0);
    });

    $modal.on('hidden.bs.modal', () => {
      $body.removeClass('gallery');
    });
  }
  return {
    init() {
      _setUpEventListeners();
    },
  };
}
