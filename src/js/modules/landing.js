import ServerRequest from './requests.js';
export default class Landing extends ServerRequest {
  constructor(options) {
    super(options);

    // Mimick private variables here. Apply all the knowledge you gained
    let { config } = options;

    console.log(config);

    let {
      forgotPasswordBtn,
      recoveryPasswordModal,
    } = this.selectors.passwordRecovery;

    let $recoveryPasswordModal = $(recoveryPasswordModal),
      $forgotPasswordBtn = $(forgotPasswordBtn);

    $forgotPasswordBtn.click(event => {
      event.preventDefault();

      $forgotPasswordBtn.closest('.modal').modal('hide');
      $recoveryPasswordModal.modal('show');
    });
  }
}
