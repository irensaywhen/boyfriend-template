import ServerRequest from './requests.js';
export default class Landing extends ServerRequest {
  constructor(options) {
    super(options);

    // Mimick private variables here. Apply all the knowledge you gained
    let { config } = options;

    const $document = $(document);

    /**
     * Password recovery
     * 1. Cache elements
     * 2. Set event listener to show password recovery modal
     * when "Forgot password" is clicked
     */
    const {
      forgotPasswordBtn,
      recoveryPasswordModal,
    } = this.selectors.passwordRecovery;

    const $recoveryPasswordModal = $(recoveryPasswordModal),
      $forgotPasswordBtn = $(forgotPasswordBtn);

    // Show password recovery modal
    $forgotPasswordBtn.click(event => {
      event.preventDefault();

      $forgotPasswordBtn.closest('.modal').modal('hide');
      $recoveryPasswordModal.modal('show');
    });

    /**
     * Show signup modal when profiles are clicked
     * 1. Cache signup modal and save selector for profile
     * 2. If profile is clicked, show signup modal
     */
    if (config.profiles) {
      const profile = this.selectors.profile || '.show-signup',
        $signUpModal = $(this.selectors.signUpModal);

      $document.click(event => {
        let $target = $(event.target);

        if ($target.closest(profile).length === 0) return;

        $signUpModal.modal('show');
      });
    }
  }
}
