import preparePhotoModal from './preparePhotoModal.js';

export default class EnlargePhoto {
  constructor(options) {
    this.entrance = options.animationClasses.entrance;
    this.exit = options.animationClasses.exit;

    // Get class or setup default class
    this.enlargeClass = options.enlargeClass || 'enlarge';

    this.selectors = options.selectors;

    let { modal, animateOnShown } = options.selectors;

    this.$modal = $(modal);

    // Initialize module preparation
    preparePhotoModal({ modal, animateOnShown }).init();

    $(document).click(event => {
      let $target = $(event.target);

      if (!$target.hasClass(this.enlargeClass)) return;

      event.preventDefault();

      this.$modal.modal('show');
    });
  }

  _showPhoto() {}

  // This function works almost the same as the one in the gallery
  // So consider make a single function to handle this functionality
  _getPhotoInfo(target) {
    let { description } = target.dataset;
    let src = target.src;

    return { description, src };
  }
}
