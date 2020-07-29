import Form from "./form.js";

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);

    // Binding context
    this.setPrice = this.setPrice.bind(this);

    this.$checkout.fadeOut(0);
  }

  cacheElements() {
    super.cacheElements();

    // Price containers
    this.$cardPriceContainer = $(this.selectors["card-total-price"]);
    this.$cardDiscountContainer = $(this.selectors["card-discount-price"]);
    this.$priceContainer = $(this.selectors["total-price"]);
    this.$previousPrice = $(this.selectors["previous-price"]);

    this.$previousPriceContainer = this.$previousPrice
      .closest("del")
      .fadeOut(0);

    // Checkout area
    this.$checkout = this.$form.find(this.selectors.checkout);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    // Additiong and removing bonuses
    this.$form.find(this.selectors["bonus-inputs"]).on("click", (event) => {
      let $target = $(event.target);
      let $buttonWrapper = $target.closest(this.selectors["bonus-control"]);

      if ($buttonWrapper.length === 0) return;

      // Figure out what operation to perform
      let operation = $buttonWrapper.hasClass(
        this.selectors["add-bonus-input-className"]
      )
        ? "add"
        : "remove";

      // Find closest input group containing current button
      let $input = $target
        .closest(this.selectors["bonus-inputs"])
        .find(this.selectors.inputs);

      // Current input value
      let value = parseInt($input.val());

      if (operation === "add") {
        $input.val(++value);
      } else {
        $input.val(--value < 0 ? 0 : value);
      }

      $input.trigger("input");
    });

    // Setting price
    this.$inputs.on("input", (event) => {
      this.collectFormInputs();

      this.setPrice();
    });
  }

  async setPrice() {
    let response;

    try {
      // Make request here
      response = await this.getPrice({
        headers: this.requests.price.headers,
        endpoint: this.requests.price.endpoint,
        method: this.requests.price.method,
      });
    } catch (error) {
      // Unsuccessful Popup
      this.showRequestResult({
        title: error.name,
        text: error.message,
        icon: "error",
      });
    }

    if (response.success) {
      let {
        initialCardPrice,
        discountCardPrice,
        hasPromo,
        totalPrice,
        totalDiscountPrice,
      } = response;

      totalPrice > 0 ? this.$checkout.fadeIn(400) : this.$checkout.fadeOut(400);

      // Handle promotion price
      if (hasPromo) {
        this.$priceContainer.text(totalDiscountPrice);
        this.$previousPrice.text(totalPrice);
        this.$previousPriceContainer.fadeIn(400);
      } else {
        this.$priceContainer.text(totalPrice);
        this.$previousPrice.text(0);
        this.$previousPriceContainer.fadeOut(400);
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
          icon: "error",
        });
      }
    }
  }
}
