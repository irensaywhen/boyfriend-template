import ServerRequest from "./requests.js";
import location from "./locationMixin.js";

export default class Form extends ServerRequest {
  constructor(options) {
    super(options);

    // Data that will be sent to the server
    this.formData = {};

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);

    if (options.location) {
      // Add methods to the form object
      Object.assign(Form.prototype, location);
      this.location = true;
    }

    this.cacheElements();
    this.setUpEventListeners();
  }

  cacheElements() {
    // Form
    this.$form = $(this.selectors.form);

    // Input fields
    this.$inputs = this.$form.find(this.selectors.inputs);

    if (this.location) {
      this.initializeLocationInput();
    }
  }

  setUpEventListeners() {
    this.$form.submit((event) => {
      event.preventDefault();
      event.stopPropagation();

      // Collect form inputs
      this.$inputs.each((index, element) => {
        let name = element.name;

        this.formData[name] = $(element).val();
      });
    });
  }

  collectFormData() {}
}
