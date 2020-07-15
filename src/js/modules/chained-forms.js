//import Form from "./requests.js";
//import location from "./locationMixin.js";

export default class ChainedForms {
  constructor(options) {
    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.showNextForm = this.showNextForm.bind(this);
    this.showPreviousForm = this.showPreviousForm.bind(this);

    // Save options
    this.selectors = options.selectors;
    this.forms = options.forms;

    this.cacheElements();
    this.setUpEventListeners();

    // Set the initial step
    this.step = 1;

    // Hide all the forms except the first one
    this.forms.forEach((item, index) => {
      if (index !== 0) {
        item.form.$form.hide();
      }
    });
  }

  cacheElements() {
    // Forms container
    this.$container = $(this.selectors.formsContainer);

    this.$forms = this.$container.find(this.selectors.forms);
    console.log(this.$forms[0]);

    // Forward button
    this.$forwardButton = this.$container.find(this.selectors.forward);

    // Backward button
    this.$backwardButton = this.$container.find(this.selectors.backward);
  }

  setUpEventListeners() {
    this.$forwardButton.click((event) => {
      event.stopPropagation();

      // Check the state of the current form
      console.log(this.forms[this.step]);
      console.log(this.forms[this.step].form.submitted);
      // If it is submitted successfully
      // Show next step
      // And update the current step

      let $form = $(event.target).closest(this.selectors.forms);

      let currentStep = $form.data("step");

      console.log(currentStep);
    });
  }

  showNextForm() {}

  showPreviousForm() {}
}
