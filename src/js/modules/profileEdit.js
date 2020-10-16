import ServerRequest from './requests.js';
import Swal from 'sweetalert2';

export default class ProfileEdit extends ServerRequest {
  constructor(options) {
    super(options);

    // Handle table and deleting account here

    /**
     * Handle deleting account
     * When the "delete my account" button is clicked:
     * 1. Show popup asking approvement
     * 2. Send request to server
     * 3. If everything is fine, redirect to main page
     */
    const _$deleteAccountButton = $(
      this.selectors.deleteAccount || '#deleteAccount'
    );

    this.popups.delete.requestName = 'delete';

    _$deleteAccountButton.click(event => {
      event.preventDefault();

      this.fireAlertWithRequest(this.popups.delete)
        .then(response => {
          if (!response) return;
          if (!response.success) {
            let error = new Error(response.message);
            error.name = response.title;
            throw error;
          }

          window.location.replace(response.redirect || '/');
        })
        .catch(error => {
          console.error(error);
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    });

    /**
     * Continue last payment
     */

    const _$purchaseSummaryTable = $(
      this.selectors.purchaseSummaryTable || '#purchaseSummary'
    );

    _$purchaseSummaryTable.click(event => {
      let $target = $(event.target);

      if (!$target.data('unpaid')) return;

      event.preventDefault();

      const redirect = `${$target.data('redirect')}?step=${
        $target.data('step') || 2
      }`;

      window.location.assign(redirect);
    });
  }
}
