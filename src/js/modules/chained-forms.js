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

    // Hide all the forms except the first one
    //this.forms.forEach((item, index) => {
    //  if (index !== 0) {
    //    item.form.$form.hide();
    //  }
    //});
  }

  cacheElements() {
    // Forms container
    this.$container = $(this.selectors.formsContainer);

    // Forms to chain
    this.$forms = this.$container
      .find(this.selectors.forms)
      .each((index, element) => {
        if (index !== 0) {
          $(element).closest(this.selectors.wrapper).fadeOut().hide();
        }
      });

    // Forward button
    this.$forwardButton = this.$container.find(this.selectors.forward);

    // Backward button
    this.$backwardButton = this.$container.find(this.selectors.backward);
  }

  setUpEventListeners() {
    this.$forms.on("submitted", (event) => {
      let target = event.target;

      let step = Number(target.dataset.step) + 1;

      $(target)
        .closest(this.selectors.wrapper)
        .fadeOut(400, () => {
          $(this.$forms.get(step)).closest(this.selectors.wrapper).fadeIn(400);
        });
    });

    this.$backwardButton.click((event) => {
      // Here something is not working
      event.stopPropagation();

      let $form = $(event.target)
        .closest(this.selectors.wrapper)
        .find(this.selectors.forms);

      let previousStep = Number($form.data("step")) - 1;

      // Hide the form wrapper
      $form.closest(this.selectors.wrapper).fadeOut(400, () => {
        // Show the form wrapper of the previous form
        $(this.$forms.get(previousStep))
          .closest(this.selectors.wrapper)
          .fadeIn(400);
      });
    });
  }

  showNextForm() {}

  showPreviousForm() {}
}