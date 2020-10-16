import ServerRequest from './requests.js';
import prepareTemplates from './prepareTemplates.js';

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
     * 1. If unpaid attribute is not presented, do nothing
     * 2. Make request to get data about the purchase
     * 3. Adjust redirect depending on provided step attribute (1 by default)
     *    - Steps are counted from zero
     * 4. Redirect to buying premium page to continue purchase
     */

    const _$purchaseSummaryTable = $(
        this.selectors.purchaseSummaryTable || '#purchaseSummary'
      ),
      _spinner = prepareTemplates(
        'spinner-template' || options.templates.spinner
      );

    _$purchaseSummaryTable.click(event => {
      let $target = $(event.target);

      if (!$target.data('unpaid')) return;

      event.preventDefault();

      let _$tableCell = $target.closest('td');
      const _tableCellContent = _$tableCell.html();

      // Insert spinner
      _$tableCell.css('width', _$tableCell.css('width')).html(_spinner);

      let { headers, method, endpoint } = this.requests.paymentData;

      // Retrieve payment details
      this.makeRequest({ headers, method, endpoint })
        .then(response => {
          // Insert initial content
          _$tableCell.html(_tableCellContent);

          if (!response.success) {
            let error = new Error(response.message);
            error.name = response.title;
            throw error;
          }
          console.log(response);

          let { redirect, data } = response;

          // Add step to search params
          redirect += `?step=${$target.data('step') || 1}`;

          for (let item in data) {
            redirect += `&${item}=${data[item]}`;
          }

          window.location.assign(redirect);
        })
        .catch(error => {
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    });
  }
}
