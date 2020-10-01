import Form from './form.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);

    // Binding context
    this._setOrderDetails = this._setOrderDetails.bind(this);

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

    // Prepare message templates to render them in the future
    this.templates = prepareTemplates(options.selectors.templateIds);
  }

  _cacheElements() {
    super._cacheElements();

    let selectors = this.selectors;

    // Container to preview order details
    this.$orderDetails = $(selectors.orderDetails);

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

    // Disable checkout button until price is being shown
    this.$checkout = this.$form
      .find(selectors.loading.submitButton)
      .attr('disabled', true);

    // Discount
    this.$discountType = $(selectors.discount.type);
    this.$discountAmount = $(selectors.discount.amount);
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

      this._setOrderDetails();
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
  _setOrderDetails() {
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
            cardDiscount,
            totalPrice,
            totalDiscountPrice,
            order,
          } = response;

          totalPrice > 0
            ? this.$checkout.attr('disabled', false)
            : this.$checkout.attr('disabled', true);

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

          // Set card discount amount
          this.$discountType.text(cardDiscount.type);
          this.$discountAmount.text(cardDiscount.amount);

          this.$orderDetails.empty();

          // Preview plan details
          if ('plan' in order) {
            // Compile template
            let template = Handlebars.compile(this.templates.plan);
            // Pass json data to the template
            template = template(order.plan);

            // Show template
            this.$orderDetails.append(template);
          }

          if ('bonuses' in order) {
            // Compile template
            let template = Handlebars.compile(this.templates.bonuses);
            // Pass json data to the template
            template = template(order.bonuses);

            // Show template
            this.$orderDetails.append(template);
          }
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
