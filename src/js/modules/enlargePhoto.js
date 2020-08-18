export default class EnlargePhoto {
  constructor(options) {
    this.entrance = options.animationClasses.entrance;
    this.exit = options.animationClasses.exit;

    this.enlargeClass = options.enlargeClass || 'enlarge';

    this.selectors = options.selectors;

    this.$modal = $(options.selectors.modal);

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
