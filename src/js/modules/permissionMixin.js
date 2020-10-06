export default {
  initializePhotoPermissionHandling(config) {
    // Bind context
    _getPhotoId = _getPhotoId.bind(this);

    // Cache
    ({ selectors, classes } = config);
    let $document = $(document);

    this.$chat.click(event => {
      let $target = $(event.target);
      if (!$target.hasClass(classes.permissionButton)) return;

      let id = _getPhotoId($target);

      if ($target.hasClass(classes.allow)) {
        // If 'allow' button is clicked
        console.log('Allowed button clicked');
        $document.trigger('permission:actionChosen', {
          type: 'permissionResponse',
          action: 'allow',
          id,
        });
      } else if ($target.hasClass(classes.deny)) {
        // If 'deny' button is clicked
        console.log('Deny button clicked');
        $document.trigger('permission:actionChosen', {
          type: 'permissionResponse',
          action: 'deny',
          id,
        });
      }

      $target.closest(selectors.buttonsWrapper).remove();
    });
  },
};

let selectors, classes;

function _getPhotoId($target) {
  return $target.closest(selectors.photoWrapper).find('img').data('id');
}
