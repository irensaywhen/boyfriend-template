import preparePhotoModal from './preparePhotoModal.js';

export default class EnlargePhoto {
  constructor(options) {
    // Bind context
    this._changePhotoModalContent = this._changePhotoModalContent.bind(this);

    // Get class or setup default class
    this.enlargeClass = options.enlargeClass || 'enlarge';

    let selectors = (this.selectors = options.selectors);

    let { modal, animateOnShown } = selectors;

    // Cache elements
    let $modal = (this.$modal = $(modal));
    this.$img = $modal.find(selectors.img);
    this.$description = $modal.find(selectors.description);

    /**
     * Initialize module preparation
     * In this module, the event listeners to change the visual appearance
     * of the overlay and close button animation is being set up
     */
    preparePhotoModal({ modal, animateOnShown }).init();

    /**
     * Event handler handling photo enlargement. On click event:
     * 1. It checks whether enlarge class is presented on the closest image
     * 2. Changes the modal content
     * 3. Opens the modal
     */
    $(document).click(event => {
      // Find the closest image
      let $img = $(event.target).closest('img');

      if (!$img.hasClass(this.enlargeClass)) return;
      event.preventDefault();

      // Change photo modal content so that it contains information about the clicked image
      this._changePhotoModalContent($img);

      this.$modal.modal('show');
    });

    /**
     * On closing modal, delete the previously saved image src and the description
     */
    $modal.on('hidden.bs.modal', () => {
      this.$img.attr('src', '');
      this.$description.text('');
    });
  }

  _changePhotoModalContent($img) {
    this.$img.attr('src', $img.attr('src'));

    this.$description.text($img.data('description'));
  }
}
