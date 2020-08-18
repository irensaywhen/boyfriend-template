export default function preparePhotoModal({ modal, animateOnShown }) {
  const $body = $('body');
  const $modal = $(modal);
  const $animateOnShown = $modal.find(animateOnShown).fadeOut(0);
  let shown = false;

  console.log($animateOnShown);

  function _setUpEventListeners() {
    // Here you can prepare modal
    // Adjust background opacity for gallery modal
    $modal.on('show.bs.modal', () => {
      $body.addClass('gallery');
    });

    $modal.on('shown.bs.modal', () => {
      $animateOnShown.fadeIn(200, () => {
        shown = true;
      });
    });

    $modal.on('hide.bs.modal', event => {
      if (shown) event.preventDefault();

      $animateOnShown.fadeOut(100, () => {
        shown = false;
        $modal.modal('hide');
      });
    });

    $modal.on('hidden.bs.modal', () => {
      $body.removeClass('gallery');
    });
  }
  return {
    generateModal(img, animation) {},
    init() {
      console.log($modal);
      console.log($animateOnShown);
      _setUpEventListeners();
    },
  };
}
