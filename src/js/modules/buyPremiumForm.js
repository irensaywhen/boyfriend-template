import Form from "./form.js";

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);

    // Binding context
    this.setPrice = this.setPrice.bind(this);
  }

  cacheElements() {
    super.cacheElements();

    this.$priceContainer = $(this.selectors.price);

    this.$discountContainer = $(this.selectors["card-payment-price"]);
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
      // Show price
      this.$priceContainer.text(response["total"]);
      this.$discountContainer.text(response["discount"]);
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
