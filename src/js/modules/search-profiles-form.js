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

    this.$form.on("input", (event) => {
      let target = event.target;

      if (target.name === "city") return;
      console.log("Inputed!");

      //console.log("Inputed");

      this.collectFormInputs();
      console.log(this.formData);
      //console.log(this.formData);
    });

    this.$locationInput.on("citySelected", () => {
      console.log("City selected");
      this.collectFormInputs();
      console.log(this.formData);
    });
  }

  initializeSlider() {
    // THink whether you need to save it
    this.$distanceFrom = this.$form.find(this.selectors["distanceFrom"]);
    this.$distanceTo = this.$form.find(this.selectors["distanceTo"]);

    this.slider["noUiSlider"].on("end", () => {
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
