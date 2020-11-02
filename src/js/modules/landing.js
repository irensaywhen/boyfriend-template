import ServerRequest from './requests.js';
export default class Landing extends ServerRequest {
  constructor(options) {
    super(options);

    // Mimick private variables here. Apply all the knowledge you gained
    let { config } = options;

    const $document = $(document);

    /**
     * Show signup modal when profiles are clicked
     * 1. Cache signup modal and save selector for profile
     * 2. If profile is clicked, show signup modal
     */
    if (config.profiles) {
      const bait = this.selectors.profile || '.show-signup',
        $signUpModal = $(this.selectors.signUpModal);

      $document.click(event => {
        let $target = $(event.target);

        if ($target.closest(bait).length === 0) return;

        event.preventDefault();

        $signUpModal.modal('show');
      });
    }
  }
}
