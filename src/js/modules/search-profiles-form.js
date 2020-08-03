import Form from "./form.js";

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    //Binding context
    this.generateAgeRange = this.generateAgeRange.bind(this);
    this.initializeSlider = this.initializeSlider.bind(this);

    this.searchFormOptions = options.searchFormOptions;

    this.slider = options.slider;

    this.generateAgeRange();
    this.initializeSlider();
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$inputs.on("input", (event) => {
      console.log("Inputed");

      //this.collectFormInputs();
    });
  }

  initializeSlider() {
    // THink whether you need to save it
    this.$distanceFrom = this.$form.find(this.selectors["distanceFrom"]);
    this.$distanceTo = this.$form.find(this.selectors["distanceTo"]);

    this.slider["noUiSlider"].on("set", () => {
      this.$inputs.first().trigger("input");
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
