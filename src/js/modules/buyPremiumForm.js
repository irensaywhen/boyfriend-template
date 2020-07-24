import Form from "./form.js";

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);
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
      console.log(this.formData);
    });
  }
}
