import Form from './form.js';

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);

    // Binding context
    this.setPrice = this.setPrice.bind(this);
  }

  _cacheElements() {
    super._cacheElements();

    // Price containers
    this.$priceContainer = $(this.selectors.price);
    this.$discountContainer = $(this.selectors['card-payment-price']);

    // Checkout area
    this.$checkout = this.$form.find(this.selectors.checkout).fadeOut(0);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    // Adding and removing bonuses
    this.$form.find(this.selectors['bonus-inputs']).on('click', event => {
      let $target = $(event.target);

      // Get the -/+ button to remove/add bonuses
      let $buttonWrapper = $target.closest(this.selectors['bonus-control']);

      if ($buttonWrapper.length === 0) return;

      // Figure out what operation to perform
      let operation = $buttonWrapper.hasClass(
        this.selectors['add-bonus-input-className']
      )
        ? 'add'
        : 'remove';

      // Find closest input group containing current button
      let $input = $target
        .closest(this.selectors['bonus-inputs'])
        .find(this.selectors.inputs);

      // Current input value
      let value = parseInt($input.val());

      if (operation === 'add') {
        $input.val(++value);
      } else {
        $input.val(--value < 0 ? 0 : value);
      }

      $input.trigger('input');
    });

    // Setting price
    this.$inputs.on('input', event => {
      this.collectFormInputs();
      console.log(this.formData);

      this.setPrice();
    });
  }

  /**
   * Get price for the selected bonuses and plan from the server
   * 1. Set selected options as search parameters
   * 2. Start making request
   */
  getPrice({ headers, endpoint, method }) {
    for (let name in this.formData) {
      endpoint.searchParams.set(name, this.formData[name]);
    }

    return this.makeRequest({ headers, endpoint, method });
  }

  /**
   * Set retrieved price for the currently selected plans and bonuses
   * 1. Get the price from the server
   *
   */
  setPrice() {
    let { headers, endpoint, method } = this.requests.price;

    // Make request to the server
    this.getPrice({ headers, endpoint, method })
      .then(response => {
        if (response.success) {
          let total = response['total'];

          let { totalPrice };

          // Show price
          this.$priceContainer.text(total);
          this.$discountContainer.text(response['discount']);

          total > 0 ? this.$checkout.fadeIn(400) : this.$checkout.fadeOut(400);
        } else {
          if (this.showFailPopup) {
            // Unsuccessful Popup
            this.showRequestResult({
              title: response.title,
              text: response.message,
              icon: 'error',
            });
          }
        }
      })
      .catch(error => {
        // Fail popup
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }
}
