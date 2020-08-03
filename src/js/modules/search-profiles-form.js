import Form from "./form.js";

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    //Binding context
    this.generateAgeRange = this.generateAgeRange.bind(this);

    this.searchFormOptions = options.searchFormOptions;

    this.generateAgeRange();
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$inputs.on("input", (event) => {
      event.stopPropagation();

      this.$form.submit();
    });
  }

  generateAgeRange() {
    // Cache range
    let ageFrom = this.searchFormOptions.ageFrom;
    let ageTo = this.searchFormOptions.ageTo;

    let $ageInputs = this.$form.find(this.selectors.age);

    for (let i = ageFrom; i <= ageTo; i++) {
      $("<option></option>").attr("value", i).text(i).appendTo($ageInputs);
    }
  }
}
