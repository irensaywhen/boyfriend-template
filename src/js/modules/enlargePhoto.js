import preparePhotoModal from './preparePhotoModal.js';

export default class EnlargePhoto {
  constructor(options) {
    this.entrance = options.animationClasses.entrance;
    this.exit = options.animationClasses.exit;

    this.enlargeClass = options.enlargeClass || 'enlarge';

    this.selectors = options.selectors;

    let { modal, animateOnShown } = options.selectors;

    this.$modal = $(modal);

    // Initialize module preparation
    preparePhotoModal({ modal, animateOnShown }).init();

    $(document).click(event => {
      event.preventDefault();

      let $target = $(event.target);

      if (!$target.hasClass(this.enlargeClass)) return;

      console.log($target);
      this.$modal.modal('show');
    });
  }

  _showPhoto() {}
}
