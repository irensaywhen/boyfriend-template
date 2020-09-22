import Form from './form.js';

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);

    // Binding context
    this.setPrice = this.setPrice.bind(this);

    /**
     * mode can be 'show' or 'hide'
     * When the mode is 'show':
     * 1. Hide price container
     * 2. Show spinner
     * When the mode is 'hide':
     * 1. Hide spinner
     * 2. Show price container
     */
    this.$spinner.toggle = mode => {
      if (mode === 'show') {
        this.$outerPriceContainer.fadeOut(100, () => {
          this.$spinner.fadeIn(100);
        });
      } else if (mode === 'hide') {
        this.$spinner.fadeOut(100, () => {
          this.$outerPriceContainer.fadeIn(100);
        });
      }
    };
  }

  _cacheElements() {
    super._cacheElements();

    let selectors = this.selectors;

    // Price containers

    // Price container to show/hide when the price is being loaded from the server
    this.$outerPriceContainer = $(selectors.priceContainer);

    // Initial price for card payment method
    this.$cardPriceContainer = $(selectors['card-total-price']);
    // Discount price for card payment method
    this.$cardDiscountContainer = $(selectors['card-discount-price']);

    // Total price to pay without discount - displayed on the first step
    this.$priceContainer = $(selectors['total-price']);
    // Total price to pay with the discount - displayed on the first step
    this.$previousPrice = $(selectors['previous-price']);

    // Container that holds the previous price
    this.$previousPriceContainer = this.$previousPrice
      .closest('del')
      .fadeOut(0);

    // Buttons to disable on request
    this.$disableButtonsOnRequest = $(selectors.disableButtonsOnRequest);

    // spinner
    this.$spinner = $(selectors.spinner).fadeOut(0);

    // Checkout area
    this.$checkout = this.$form.find(selectors.checkout).fadeOut(0);
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
    // Hide previous price and show spinner
    this.$spinner.toggle('show');

    // Make request to the server
    this.getPrice({ headers, endpoint, method })
      .then(response => {
        this.$spinner.toggle('hide');

        if (response.success) {
          let {
            initialCardPrice,
            discountCardPrice,
            hasPromo,
            totalPrice,
            totalDiscountPrice,
          } = response;

          totalPrice > 0
            ? this.$checkout.fadeIn(400)
            : this.$checkout.fadeOut(400);

          // Handle promotion price
          if (hasPromo) {
            this.$priceContainer.text(totalDiscountPrice);
            this.$previousPrice.text(totalPrice);
            this.$previousPriceContainer.show();
          } else {
            this.$priceContainer.text(totalPrice);
            this.$previousPrice.text(0);
            this.$previousPriceContainer.hide();
          }

          // Handle card payment price
          this.$cardPriceContainer.text(initialCardPrice);
          this.$cardDiscountContainer.text(discountCardPrice);
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
        if (this.showFailPopup) {
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        }
      });
  }
}
