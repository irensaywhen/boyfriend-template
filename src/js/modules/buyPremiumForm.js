import Form from "./form.js";

export default class BuyPremiumForm extends Form {
  constructor(options) {
    super(options);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$form.find(this.selectors["bonus-inputs"]).on("click", (event) => {
      console.log(event.target);
      console.log($(event.target).closest(this.selectors["bonus-control"]));
    });
  }
}
